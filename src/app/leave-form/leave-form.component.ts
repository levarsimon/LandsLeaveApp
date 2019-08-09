import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss']
})
export class LeaveFormComponent implements OnInit {

  leaveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.leaveForm = this.formBuilder.group({
      reason: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
   }

   onSubmit() {
     if(this.leaveForm.valid) {
       console.log(this.leaveForm.value);
     }
   }

  ngOnInit() {
  }

}
