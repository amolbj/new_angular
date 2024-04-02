import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateAssignmentComponent } from './state-assignment.component';

describe('StateAssignmentComponent', () => {
  let component: StateAssignmentComponent;
  let fixture: ComponentFixture<StateAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateAssignmentComponent]
    });
    fixture = TestBed.createComponent(StateAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
