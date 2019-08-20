import {Message} from '../models/Messages';


export class GetMessages{
  static readonly type='[Messages Page] GetMessages';

  constructor(public messages: Message[]){
    
  }
}