import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './modal.component.html',
  selector: 'app-message-modal-component'
})

export class AppMessageModalComponent {

  @Input()
  btnText = 'OK!';

  show = false;
  msg = '';

  open(msg: string){
    this.show = true;
    this.msg = msg;
  }
}