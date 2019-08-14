import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-timeoff-form',
  templateUrl: './timeoff-form.component.html',
  styleUrls: ['./timeoff-form.component.scss']
})
export class TimeoffFormComponent implements OnInit {

  requestForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.requestForm = this.formBuilder.group({
      reason: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  submit() {
    if (this.requestForm.valid) {
      console.log(this.requestForm.value);
      this.requestForm.reset();
    }
  }

  resetForm() {
    this.requestForm.reset();
  }

  ngOnInit() {
  }

}
