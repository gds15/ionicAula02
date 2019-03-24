import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardesPage } from './cardes.page';

describe('CardesPage', () => {
  let component: CardesPage;
  let fixture: ComponentFixture<CardesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
