import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './modal.component.html',
  selector: 'app-staff-by-division-modal-component'
})

export class AppStaffByDivisionModalComponent {

  @Input()
  btnText = 'OK!';

  show = false;
  msg = '';

  open(msg: string){
    this.show = true;
    this.msg = msg;
  }
}