import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderSandbox } from './form-builder-sandbox';

describe('FormBuilderSandbox', () => {
  let component: FormBuilderSandbox;
  let fixture: ComponentFixture<FormBuilderSandbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuilderSandbox],
    }).compileComponents();

    fixture = TestBed.createComponent(FormBuilderSandbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
