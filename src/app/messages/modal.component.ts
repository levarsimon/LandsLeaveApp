import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './modal.component.html',
  selector: 'app-modal-component'
})

export class AppModalComponent {

  @Input()
  btnText = 'OK!';

  show = false;
  msg = '';

  open(msg: string){
    this.show = true;
    this.msg = msg;
  }
}