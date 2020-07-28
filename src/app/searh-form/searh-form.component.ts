import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-searh-form',
  templateUrl: './searh-form.component.html',
  styleUrls: ['./searh-form.component.css']
})
export class SearhFormComponent implements OnInit {
  @Output() keyword = new EventEmitter<string>();

  getInputValue(event) {
    this.keyword = event;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
