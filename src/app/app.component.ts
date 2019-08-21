import { Component, OnInit } from '@angular/core';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { Router } from '@angular/router';
import { Signout } from './states/auth-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LandsLTT';

  constructor(private actions: Actions,private router:Router){
  }
  
  ngOnInit(){
    this.actions.pipe(ofActionDispatched(Signout)).subscribe(()=>{
    this.router.navigate(['/login']);
    });
  }
}
