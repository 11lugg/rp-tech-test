import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';


const routes: Routes = [
  { path: "feedback", component: FeedbackComponent },
  { path: "thankyou", component: ThankYouComponent },
  { path: "", redirectTo: "/feedback", pathMatch: "full" },
  { path: "**", component: FeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
