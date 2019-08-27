import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from '../services/auth-service.service';
import {Router} from '../../../node_modules/@angular/router';

import {Validators, FormControl, FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Signin } from '../states/auth-actions';
import { ClrForm } from '@clr/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  invalidLogin:boolean;

  loginForm= this.formBuilder.group({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  @ViewChild(ClrForm,{static:true}) form: ClrForm;

  feedback: {username: string, password: string};

  constructor(private router: Router, private authservice: AuthService, private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit() {
  }

  resetForm(){
    this.loginForm.reset();
  }

  submit(){
    if(this.loginForm.valid){

      this.feedback=this.loginForm.value;
      this.store.dispatch(new Signin(this.feedback))
      this.login(this.feedback);
    }
    else{
      this.form.markAsTouched();
    }
  }

  login(credentials){
    this.authservice.signin(credentials)
    .subscribe(result => {
    if (result)
      this.router.navigate(['/home']);
    else
      this.invalidLogin = true;
    });  
  }
}