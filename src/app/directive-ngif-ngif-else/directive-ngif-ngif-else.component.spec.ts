import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgifNgifElseComponent } from './directive-ngif-ngif-else.component';

describe('DirectiveNgifNgifElseComponent', () => {
  let component: DirectiveNgifNgifElseComponent;
  let fixture: ComponentFixture<DirectiveNgifNgifElseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveNgifNgifElseComponent]
    });
    fixture = TestBed.createComponent(DirectiveNgifNgifElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
