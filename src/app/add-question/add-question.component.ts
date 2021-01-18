import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionnaireMaintenanceService } from '../questionnaire-maintenance.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  addQuestionForm = this.formBuilder.group({
    code: '',
    internal: '',
    category: '',
    description: '',
    answerStyle: ''
  });

  isSubmitted;
  message;

  constructor(
      private formBuilder: FormBuilder,
      private questionnaireService: QuestionnaireMaintenanceService
  ) { }




  ngOnInit() {
  }


  onSubmit(): void {  
    var isInternal = false;
    if (this.addQuestionForm.get('internal').value) {
      isInternal = true;
    }

    var currentTime = new Date();
    var newQuestion = {
        id: currentTime.getTime(),
        category: "Age",
        code: this.addQuestionForm.get('code').value,
        description : this.addQuestionForm.get('description').value,
        internal: isInternal,
        answerStyle: "yesNo"
    };
    this.questionnaireService.addQuestion(newQuestion);

    // Process checkout data here
    console.warn('Your order has been submitted', this.addQuestionForm.value);
    this.addQuestionForm.reset();

    this.isSubmitted = true;
    this.message = 'The new question for code ' + this.addQuestionForm.get('code').value + ' has been added';
  }

}