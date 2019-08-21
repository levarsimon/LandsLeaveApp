export class GetUser{
  static readonly type= '[User API] GetUser';

  constructor(public id : number){

  }
}

export class DeleteUser{
  static readonly type='[User Api] DeleteUser';

  constructor (public id: number){

  }
}