import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Leave} from '../models/Leave';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss']
})
export class LeaveFormComponent implements OnInit {

  requestForm: FormGroup;
  feedback: Leave;
  @ViewChild('rform',{static:false}) requestFormDirective;
  
  constructor(private formBuilder: FormBuilder) {

    this.createForm();

  }

  createForm() {
    this.requestForm = this.formBuilder.group({
      type:['',Validators.required],
      reason: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  onSubmit() {
    this.feedback = this.requestForm.value;
    this.requestForm.reset({
      type:'',
      reason:'',
      startDate:'',
      endDate:''
    });
    this.requestFormDirective.resetForm();
  }

  resetForm() {
    this.requestForm.reset();
  }

  ngOnInit() {
  }

}
