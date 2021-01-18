import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { QuestionnaireMaintenanceService } from '../questionnaire-maintenance.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  viewedQuestion;

  getQuestion() {
    console.log('question2: ' + this.viewedQuestion.id);
    return this.viewedQuestion;
  }

  constructor(
       private route: ActivatedRoute,
       private questionnaireService: QuestionnaireMaintenanceService
  ) { }

   ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const questionIdFromRoute = Number(routeParams.get("questionId"));

    console.log('pulled from query paraemter ' + questionIdFromRoute);

    this.viewedQuestion = this.questionnaireService.getQuestion(questionIdFromRoute);
    console.log('question1: ' + this.viewedQuestion.id);
    // Find the product that correspond with the id provided in route.
    //this.product = products.find(product => product.id === productIdFromRoute);
  }


}