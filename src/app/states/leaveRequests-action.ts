import {Leave} from '../models/Leave';

export class GetRequests{

  static readonly type='[History Page] GetRquests';

  constructor(public id: number){

  }
}

export class ApplyLeave{
  static readonly type="[Apply Page] ApplyLeave";

  constructor(public leave: Leave){
    
  }
}