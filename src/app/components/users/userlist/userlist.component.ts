import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../../IUser';
import {filter} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../user.service';
import {IGroup} from '../../../IGroup';
import {GroupService} from '../../group-management/group.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userFilter = [];
  users: IUser[] = [];
  groups: IGroup[] = [];
  page: number = 1;

  constructor(private userService: UserService,
              private groupService: GroupService) {
  }

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

  ngOnInit()
    :
    void {
    this.users = this.userService.getAll();
    this.userFilter = this.users;
    this.groups = this.groupService.getAll();

  }

}
