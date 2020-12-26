import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutActorComponent } from './about-actor.component';

describe('AboutActorComponent', () => {
  let component: AboutActorComponent;
  let fixture: ComponentFixture<AboutActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
