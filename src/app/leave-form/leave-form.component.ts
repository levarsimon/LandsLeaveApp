import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss']
})
export class LeaveFormComponent implements OnInit {

  requestForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    
    this.requestForm = this.formBuilder.group({
      reason: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
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
