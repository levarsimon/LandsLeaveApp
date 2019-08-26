import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  emailAuthenticationForm: FormGroup;
  resetPasswordForm: FormGroup;

  email: string;
  show = false;

  @ViewChild('rform',{static:false}) requestFormDirective;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    this.email = this.resetPasswordForm.value;
    this.resetPasswordForm.reset({
      emailAddress:''
    });
    this.requestFormDirective.resetForm();
    this.show = true;
  }

  resetEmailForm() {
    this.emailAuthenticationForm.reset();
  }

  resetPwordForm() {
    this.resetPasswordForm.reset();
  }

  ngOnInit() {
  }

}
