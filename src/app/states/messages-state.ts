import {Message} from '../models/Messages';
import { State } from '@ngxs/store';

export interface MessagesStateModel{
  messages: Message[];
}

@State<MessagesStateModel>({
  name: 'messages'
})

export class MessagesState{

}