import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './modal.component.html',
  selector: 'app-staff-by-subdivision-modal-component'
})

export class AppStaffBySubdivisionModalComponent {

  @Input()
  btnText = 'OK!';

  show = false;
  msg = '';

  open(msg: string){
    this.show = true;
    this.msg = msg;
  }
}