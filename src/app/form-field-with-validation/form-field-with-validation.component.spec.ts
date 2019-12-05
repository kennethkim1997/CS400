import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldWithValidationComponent } from './form-field-with-validation.component';

describe('FormFieldWithValidationComponent', () => {
  let component: FormFieldWithValidationComponent;
  let fixture: ComponentFixture<FormFieldWithValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldWithValidationComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldWithValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
