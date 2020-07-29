import {Component, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../../../IUser';
import {userError} from '@angular/compiler-cli/src/transformers/util';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../user.service';
import {Router} from '@angular/router';
import validate = WebAssembly.validate;
import {GroupService} from '../../group-management/group.service';
import {IGroup} from '../../../IGroup';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    id: new FormControl(0,Validators.required),
    name: new FormControl('',Validators.minLength(4)),
    email: new FormControl('',[Validators.required, Validators.email]),
    group_id: new FormControl('',Validators.required)
  });
  groups:IGroup[];

  constructor(private userService: UserService,
              private router : Router,
              private groupService: GroupService,
              ) {
  }

  create() {
    const user: IUser = {
      id: this.userForm.value.id,
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      group_id: +this.userForm.value.group_id
    };
    this.userService.create(user);
    this.router.navigate(['/']);
    console.log(user)
  }
  goBack(){
    this.isActive=true;

  }
  isActive = true;

  showCreateForm() {
    this.isActive = !this.isActive;
  }
  get email(){
    return this.userForm.value.email;
  }
  ngOnInit(): void {
    this.groups = this.groupService.getAll();
    console.log(this.groups)
  }

}
