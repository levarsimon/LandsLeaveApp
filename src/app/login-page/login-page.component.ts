import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AuthService} from '../services/auth-service.service';
import {Router} from '../../../node_modules/@angular/router';
import { Store } from '@ngxs/store';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Login } from '../models/Login';

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

  feedback: Login;

  constructor(private router: Router, private authservice:AuthService, private formBuilder:FormBuilder) { }

  ngOnInit() {
  }

  resetForm(){
    this.loginForm.reset();
  }

  submit(){
    if(this.loginForm.valid){

      this.feedback=this.loginForm.value;
      this.login(this.feedback);
    }
    else{
    }
    this.loginForm.reset();
  }


  login(credentials){
    this.authservice.signin(credentials).subscribe(result => {
      if (result)
        this.router.navigate(['/home']);
      else
        this.invalidLogin=true;
    })
  }
}
