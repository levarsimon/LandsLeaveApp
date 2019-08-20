import {State} from '@ngxs/store';
import {Leave} from '../models/Leave';

export interface RequestsStateModel{
  leaveRequests: Leave[];
}

@State<RequestsStateModel>({
  name:'leaveRequests'
})

export class LeaveRequestsState{

}