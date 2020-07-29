import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IUser} from '../../../IUser';
import {GroupService} from '../../group-management/group.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserService} from '../../../user.service';
import {IGroup} from '../../../IGroup';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  titlePage = 'Edit user info'
  editUserForm: FormGroup;
  editUserId:string;
  editUser: IUser;
  groups: IGroup[];
  constructor(
    private groupService: GroupService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      this.editUserId = paramMap.get('id');
      this.editUser = this.userService.getUserById(+this.editUserId);
    })

  }
  updateUser(){

  }

  ngOnInit(): void {
    this.editUserForm = new FormGroup({
      id:new FormControl(this.editUserId),
      name:new FormControl(this.editUser.name),
      email:new FormControl(this.editUser.email),
      group_id:new FormControl(this.editUser.group_id),
    });
    this.groups = this.groupService.getAll();
  }

}
