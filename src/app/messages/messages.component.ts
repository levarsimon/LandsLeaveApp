import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { AppModalComponent } from './modal.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @ViewChild(AppModalComponent, {static: true}) modal: AppModalComponent;

  constructor() { }

  open() {
    this.modal.open();
  }

  ngOnInit() {
  }

}