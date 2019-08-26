import {State, Selector, Action, StateContext} from '@ngxs/store';
import {Leave} from '../models/Leave';
import { RequestsService } from '../services/requests.service';
import { GetRequests, ApplyLeave } from './leaveRequests-action';
import { tap } from 'rxjs/operators';


export interface RequestsStateModel{
  leaveRequests: Leave[];
}

@State<RequestsStateModel>({
  name:'leaveRequests'
})

export class LeaveRequestsState{

  @Selector()
  static leaveRequests(state:RequestsStateModel){
    return state.leaveRequests;
  }

  constructor(private requestService: RequestsService){


  }

  @Action(GetRequests)
  getRequest(
    {patchState}: StateContext<RequestsStateModel>,
    payload: number
  ){
    return this.requestService.getLeave(payload).pipe(
      tap(result =>{
        patchState({
          leaveRequests: result
        });
      })
    );
  }

  @Action(ApplyLeave)
  applyLeave(
    payload:Leave
  ){
    return this.requestService.applyLeave(payload);
  }
}