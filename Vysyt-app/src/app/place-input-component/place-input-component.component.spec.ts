import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceInputComponentComponent } from './place-input-component.component';

describe('PlaceInputComponentComponent', () => {
  let component: PlaceInputComponentComponent;
  let fixture: ComponentFixture<PlaceInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceInputComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
