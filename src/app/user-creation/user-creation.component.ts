import {Component, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../IUser';
import {userError} from '@angular/compiler-cli/src/transformers/util';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private userService: UserService) {
  }

  create() {
    const user: IUser = {
      id: this.userForm.value.id,
      name: this.userForm.value.name,
      email: this.userForm.value.email,
    };
    this.userService.create(user);
  }

  isActive = true;

  showCreateForm() {
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {
  }

}
