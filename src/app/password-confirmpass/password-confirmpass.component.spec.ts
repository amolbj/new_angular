import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordConfirmpassComponent } from './password-confirmpass.component';

describe('PasswordConfirmpassComponent', () => {
  let component: PasswordConfirmpassComponent;
  let fixture: ComponentFixture<PasswordConfirmpassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordConfirmpassComponent]
    });
    fixture = TestBed.createComponent(PasswordConfirmpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
