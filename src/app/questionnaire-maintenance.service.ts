import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, of, from } from "rxjs";
import { catchError, retry, map, tap } from "rxjs/operators";

import { IQuestion } from "../iquestion.ts";

@Injectable()
export class QuestionnaireMaintenanceService {
  constructor(private http: HttpClient) {
    this.retrieveCurrentQuestionnaire();
  }

  //  questionnaireURL = 'https://c7ts1melqb.execute-api.ca-central-1.amazonaws.com/development/immunization/questionnaire';
  questionnaireURL =
    "https://immunization-admin.stackblitz.io/assets/questionnaire.json";
  currentQuestionnaire;
  questions;

  reload() {
    this.currentQuestionnaire = undefined;
    this.retrieveCurrentQuestionnaire();
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  getQuestion(questId) {
    for (var i = 0; i < this.questions.length; i++) {
      if (this.questions[i].id == questId) {
        return this.questions[i];
      }
    }
  }

  getQuestionnaireJSON() {
    return JSON.stringify(this.questions, null, 2);
  }

  removeQuestion(questId) {
    console.log("to delete " + questId);
    var modifiedList = [];
    for (var i = 0; i < this.questions.length; i++) {
      console.log("index " + i + " ==> " + this.questions[i].id);
      if (this.questions[i].id != questId) {
        modifiedList.push(this.questions[i]);
      }
    }

    this.questions = modifiedList;
  }

  getQuestionnaire() {
    return this.questions;
  }

  getQuestionCategory(category) {
    var categoryList = [];
    for (var i = 0; i < this.getQuestionnaire().length; i++) {
      if (this.questions[i].category == category) {
        categoryList.push(this.questions[i]);
      }
    }

    return categoryList;
  }

  // See https://angular.io/guide/http      "Making a POST request"
  //
  saveQuestionnaire() {
    return this.http.post<IQuestion[]>(this.questionnaireURL, this.questions);
  }

  retrieveCurrentQuestionnaire(): Observable<IQuestion[]> {
    if (this.currentQuestionnaire === undefined) {
      console.log("Current Questionnaire is undefined, so pulling it down");
      this.currentQuestionnaire = this.http.get<IQuestion[]>(
        this.questionnaireURL
      );

      this.currentQuestionnaire.subscribe((quest: IQuestion) => {
        this.questions = quest;
      });
    } else {
      console.log("Retrieving cached current questionnaire");
    }

    return this.questions;
  }
}
