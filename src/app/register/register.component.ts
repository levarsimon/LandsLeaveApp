import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
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
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern('^(?=.*[a-zA-Z])+$')])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern('^(?=.*[a-zA-Z])+$')])),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      position: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(?=.*[a-zA-Z0-9])+$')])),
      employeeBand: new FormControl('', Validators.required),
      username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]))
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
