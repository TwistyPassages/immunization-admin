import { Component, OnInit } from '@angular/core';
import { QuestionnaireMaintenanceService } from '../questionnaire-maintenance.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questionnaire = this.questionnaireService.getCurrentQuestionnaire();

  constructor(
    private questionnaireService: QuestionnaireMaintenanceService) {
  }

  removeQuestion(questId) {
    this.questionnaireService.removeQuestion(questId);   
  }

  getQuestionnaire() {
    return this.questionnaireService.getQuestionnaire();
    
  }

  reload() {
    this.questionnaireService.reload();
  }

  ngOnInit() {
  }
}