import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhFormComponent } from './searh-form.component';

describe('SearhFormComponent', () => {
  let component: SearhFormComponent;
  let fixture: ComponentFixture<SearhFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearhFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearhFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
