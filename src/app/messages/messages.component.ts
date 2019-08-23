import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { AppMessageModalComponent } from './modal.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @ViewChild(AppMessageModalComponent, {static: true}) modal: AppMessageModalComponent;

  constructor() { }
  
  ngOnInit() {
  }

}