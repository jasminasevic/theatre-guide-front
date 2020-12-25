import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheatreComponent } from './about-theatre.component';

describe('AboutTheatreComponent', () => {
  let component: AboutTheatreComponent;
  let fixture: ComponentFixture<AboutTheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTheatreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
