import {Component, OnInit} from '@angular/core';
import {IUser} from '../IUser';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userFilter = [];
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

  search(event) {
    let keyword = event.target.value;
    this.userFilter = (keyword) ? this.filter(keyword) : this.users;
  }

  filter(keyword) {
    return this.users.filter(user => {
      return user.name.indexOf(keyword) != -1;
    });
  }

  delete(id: number) {
    let deleteUser = [];
    this.userFilter.map(user => {
      if (user.id != id) {
        deleteUser.push(user);
      }
    });
    this.userFilter = deleteUser;
  }


  constructor() {
}

ngOnInit()
:
void {
  this.userFilter = this.users;
}

}
