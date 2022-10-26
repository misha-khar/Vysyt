import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshResultsButtonComponentComponent } from './refresh-results-button-component.component';

describe('RefreshResultsButtonComponentComponent', () => {
  let component: RefreshResultsButtonComponentComponent;
  let fixture: ComponentFixture<RefreshResultsButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshResultsButtonComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshResultsButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
