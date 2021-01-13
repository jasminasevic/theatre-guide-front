/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllRepertoiresComponent } from './all-repertoires.component';

describe('AllRepertoiresComponent', () => {
  let component: AllRepertoiresComponent;
  let fixture: ComponentFixture<AllRepertoiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRepertoiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRepertoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
