import { Component, OnInit } from '@angular/core';
import {IGroup} from '../IGroup';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.css']
})
export class GroupManagementComponent implements OnInit {
  groupList : IGroup[] = [
    {
      id:1,
      name:'A'
    },
    {
      id:2,
      name:'B'
    }, {
      id:3,
      name:'C'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
