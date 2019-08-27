import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
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
      type: new FormControl('',Validators.required),
      reason: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
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
