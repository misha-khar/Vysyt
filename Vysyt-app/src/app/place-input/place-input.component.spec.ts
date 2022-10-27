import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceInputComponent } from './place-input.component';

describe('PlaceInputComponent', () => {
  let component: PlaceInputComponent;
  let fixture: ComponentFixture<PlaceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
