import {Injectable} from '@angular/core';
import {IUser} from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      id: 1,
      name: 'User1',
      email: 'User1@gmail.com'
    },
    {
      id: 2,
      name: 'User2',
      email: 'User2@gmail.com'
    }, {
      id: 3,
      name: 'User3',
      email: 'User1@gmail.com'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.users;
  }

  create(user: IUser) {
    this.users.push(user);
  }
}
