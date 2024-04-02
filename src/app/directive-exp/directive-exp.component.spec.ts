import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExpComponent } from './directive-exp.component';

describe('DirectiveExpComponent', () => {
  let component: DirectiveExpComponent;
  let fixture: ComponentFixture<DirectiveExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveExpComponent]
    });
    fixture = TestBed.createComponent(DirectiveExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
