import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormArray } from "@angular/forms";
import { QuestionnaireMaintenanceService } from "../questionnaire-maintenance.service";

@Component({
  selector: "app-add-question",
  templateUrl: "./add-question.component.html",
  styleUrls: ["./add-question.component.css"]
})
export class AddQuestionComponent implements OnInit {
  addQuestionForm = this.formBuilder.group({
    code: ["", Validators.required],
    internal: "",
    category: ["", Validators.required],
    description: ["", Validators.required],
    answerStyle: ["", Validators.required],
    answers: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });


  constructor(
    private formBuilder: FormBuilder,
    private questionnaireService: QuestionnaireMaintenanceService
  ) {}

  get answers() {
    return this.addQuestionForm.get('answers') as FormArray;
  }

  addAnswer() {
    this.answers.push(this.formBuilder.control(''));
  }


  ngOnInit() {}

  onSubmit(): void {
    console.log("onSubmit()");
    var isInternal = false;
    if (this.addQuestionForm.get("internal").value) {
      isInternal = true;
    }

    var code = this.addQuestionForm.get("code").value;
    var category = this.addQuestionForm.get("category").value;
    var description = this.addQuestionForm.get("description").value;
    var answerStyle = this.addQuestionForm.get("answerStyle").value;
    console.log('answer style: ' + answerStyle);

    var answers = [];
    if (answerStyle === 'YesNo') {
      console.log('doing it');
      answers.push({
        code: "true",
        display: "Yes"
      });
      answers.push({
        code: "false",
        display: "No"
      });
    }

console.log(JSON.stringify(answers));


    var currentTime = new Date();
    var newQuestion = {
      id: currentTime.getTime(),
      category: category,
      code: code,
      description: description,
      internal: isInternal,
      answerStyle: answerStyle,
      answerOptions: answers
    };
    this.questionnaireService.addQuestion(newQuestion);


    // Process checkout data here
    console.warn("Your order has been submitted", this.addQuestionForm.value);
    this.addQuestionForm.reset();

  }
}
