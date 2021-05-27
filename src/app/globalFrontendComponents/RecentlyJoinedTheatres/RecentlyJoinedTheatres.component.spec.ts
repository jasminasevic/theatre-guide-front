/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecentlyJoinedTheatresComponent } from './RecentlyJoinedTheatres.component';

describe('RecentlyJoinedTheatresComponent', () => {
  let component: RecentlyJoinedTheatresComponent;
  let fixture: ComponentFixture<RecentlyJoinedTheatresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyJoinedTheatresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyJoinedTheatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
