import { Injectable } from '@angular/core';

export class Subdivision{
  id:number;
  divisionID:number;
  supervisorID:number;
  name:string;
  createdOn: Date;
  createdBy: string;
  modifiedOn: Date;
  modifiedBy:string;

  constructor(id,divisionID,supervisorID,name){

  }

}

@Injectable({
  providedIn:'root'
})

export class SubdivisionAdapter{

  adapt(item:any):Subdivision{
    return new Subdivision(
      item.subDivId,
      item.divId,
      item.supvrId,
      item.name
    );
  }
}