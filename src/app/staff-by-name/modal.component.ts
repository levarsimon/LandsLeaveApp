import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './modal.component.html',
  selector: 'app-staff-by-name-modal-component'
})

export class AppStaffByNameModalComponent {

  @Input()
  btnText = 'OK!';

  show = false;
  msg = '';

  open(msg: string){
    this.show = true;
    this.msg = msg;
  }
}