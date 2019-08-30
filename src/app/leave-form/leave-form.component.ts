import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from "@angular/forms";
import {Leave} from '../models/Leave';
import { DateValidator } from '../custom-validator/custom-validator';

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
      startDate: new FormControl('', Validators.compose([Validators.required, DateValidator])),
      endDate: new FormControl('', Validators.required)      
    }, {validator: this.dateLessThan('startDate', 'endDate')},
    );
  }

  dateLessThan(from: string, to: string) {    
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];      
      if (f.value > t.value) {
        return {
          dates: "Start Date should be before the End Date"
        };
      }      
      return {};
    }
  }

  get startDate() {
    return this.requestForm.get('startDate');
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
