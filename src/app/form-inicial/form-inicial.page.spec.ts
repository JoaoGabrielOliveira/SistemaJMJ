import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInicialPage } from './form-inicial.page';

describe('FormInicialPage', () => {
  let component: FormInicialPage;
  let fixture: ComponentFixture<FormInicialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInicialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
