/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddSceneComponent } from './add-scene.component';

describe('AddSceneComponent', () => {
  let component: AddSceneComponent;
  let fixture: ComponentFixture<AddSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
