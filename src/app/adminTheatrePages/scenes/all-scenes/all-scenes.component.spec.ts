/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllScenesComponent } from './all-scenes.component';

describe('AllScenesComponent', () => {
  let component: AllScenesComponent;
  let fixture: ComponentFixture<AllScenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllScenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllScenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
