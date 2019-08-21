import { State } from '@ngxs/store';
import { leaveTaken } from '../models/leaveTaken';

export interface MessagesStateModel{
  leave: leaveTaken[];
}

@State<MessagesStateModel>({
  name: 'takenLeaves'
})

export class TakenLeaveState{

}