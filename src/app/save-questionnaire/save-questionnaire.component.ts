import { Component, OnInit } from '@angular/core';
import { QuestionnaireMaintenanceService } from '../questionnaire-maintenance.service';

@Component({
  selector: 'app-save-questionnaire',
  templateUrl: './save-questionnaire.component.html',
  styleUrls: ['./save-questionnaire.component.css']
})
export class SaveQuestionnaireComponent implements OnInit {

  questionnaire = this.questionnaireService.getCurrentQuestionnaire();
  jsonText;

  constructor(
    private questionnaireService: QuestionnaireMaintenanceService) {
      this.jsonText = this.questionnaireService.getQuestionnaireJSON();
  }

  saveQuestion() {
    this.questionnaireService.saveQuestionnaire();   
  }


 ngOnInit() {
  }

}