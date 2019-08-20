import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-resumption-form',  
  styleUrls: ['./resumption-form.component.scss'],
  templateUrl: './resumption-form.component.html'
})

export class ResumptionFormComponent implements OnInit {

  resumptionForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.resumptionForm = this.formBuilder.group({      
      resumptionDate: ['', Validators.required]
    });
  }

  submit() {
    if (this.resumptionForm.valid) {
      console.log(this.resumptionForm.value);
      this.resumptionForm.reset();
    }
  }

  resetForm() {
    this.resumptionForm.reset();
  }

  ngOnInit() {
  }
}