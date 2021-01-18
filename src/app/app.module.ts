import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartService } from "./cart.service";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { AnalysisComponent } from "./analysis/analysis.component";
import { HomeComponent } from "./home/home.component";
import { HelpComponent } from "./help/help.component";
import { QuestionnaireMaintenanceService } from "./questionnaire-maintenance.service";
import { QuestionnaireComponent } from "./questionnaire/questionnaire.component";
import { QuestionComponent } from './question/question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { SaveQuestionnaireComponent } from './save-questionnaire/save-questionnaire.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "help", component: HelpComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "analysis", component: AnalysisComponent },
      { path: "product", component: ProductListComponent },
      { path: "questionnaire", component: QuestionnaireComponent },
      { path: "questionnaire/:questionId", component: QuestionComponent },
      { path: "question", component: AddQuestionComponent },
      { path: "save-questionnaire", component: SaveQuestionnaireComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    AnalysisComponent,
    HomeComponent,
    HelpComponent,
    QuestionnaireComponent,
    QuestionComponent,
    AddQuestionComponent,
    SaveQuestionnaireComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService, QuestionnaireMaintenanceService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
