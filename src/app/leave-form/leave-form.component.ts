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
  currentDate: Date = new Date();
 
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
    }, {validator: this.dateBeforeCheck('currentDate', 'startDate')},//{validator: this.dateLessThan('startDate', 'endDate')},
    );
  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: "Start Date should be less than End Date"
        };
      }
      return {};
    }
  }

  dateBeforeCheck(currentDate: String, startDate: String) {
    return (group: FormGroup): {[key: string]: any} => {
      let d1 = group.controls[currentDate];
      let d2 = group.controls[startDate];
      if (d1.value > d2.value) {
        return {
          dates: "Start Date has already passed"
        };
      }
      return{};
    }
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
