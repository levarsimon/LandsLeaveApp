import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Register } from '../models/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  feedback: Register;
  @ViewChild('rform',{static:false}) registerFormDirective;

  constructor(private formBuilder: FormBuilder) {

    this.createForm();

  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      position:['',Validators.required],
      jobTitle: ['', Validators.required],
      employeeBand: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.feedback = this.registerForm.value;
    this.registerForm.reset({
      firstName:'',
      lastName:'',
      dob:'',
      email:'',
      position:'',
      jobTitle:'',
      employeeBand:'',
      username:'',
      password:''
    });
    this.registerFormDirective.resetForm();
  }

  resetForm() {
    this.registerForm.reset();
  }

  ngOnInit() {
  }

}
