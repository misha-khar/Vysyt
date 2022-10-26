import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSliderComponentComponent } from './price-slider-component.component';

describe('PriceSliderComponentComponent', () => {
  let component: PriceSliderComponentComponent;
  let fixture: ComponentFixture<PriceSliderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceSliderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceSliderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
