/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditRepertoireComponent } from './edit-repertoire.component';

describe('EditRepertoireComponent', () => {
  let component: EditRepertoireComponent;
  let fixture: ComponentFixture<EditRepertoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRepertoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRepertoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
