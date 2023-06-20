import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupNestedComponent } from './form-group-nested.component';

describe('FormGroupNestedComponent', () => {
  let component: FormGroupNestedComponent;
  let fixture: ComponentFixture<FormGroupNestedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormGroupNestedComponent]
    });
    fixture = TestBed.createComponent(FormGroupNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
