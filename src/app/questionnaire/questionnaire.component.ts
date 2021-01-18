import { Component, OnInit } from "@angular/core";
import { QuestionnaireMaintenanceService } from "../questionnaire-maintenance.service";

@Component({
  selector: "app-questionnaire",
  templateUrl: "./questionnaire.component.html",
  styleUrls: ["./questionnaire.component.css"]
})
export class QuestionnaireComponent implements OnInit {
  questionnaire;

  constructor(private questionnaireService: QuestionnaireMaintenanceService) {}

  removeQuestion(questId) {
    this.questionnaireService.removeQuestion(questId);
  }

  getQuestionnaire() {
    return this.questionnaireService.getQuestionnaire();
  }

  getLocationQuestions() {
    return this.questionnaireService.getQuestionCategory("Location");
  }

  getAgeQuestions() {
    return this.questionnaireService.getQuestionCategory("Age");
  }

  getHealthQuestions() {
    return this.questionnaireService.getQuestionCategory("Health");
  }

  getOccupationQuestions() {
    return this.questionnaireService.getQuestionCategory("Occupation");
  }

  reload() {
    this.questionnaireService.reload();
  }

  ngOnInit() {
  }
}
