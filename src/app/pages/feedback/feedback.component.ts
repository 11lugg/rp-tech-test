import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.scss"]
})
export class FeedbackComponent implements OnInit {
  public feedbackForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
      this.feedbackForm = this.formBuilder.group({
        name: [""], company: [""], jobtitle: [""], years: [""], like: [""]
      });
  }

  formSubmit(formValues) {
    console.log(formValues);
  }
}
