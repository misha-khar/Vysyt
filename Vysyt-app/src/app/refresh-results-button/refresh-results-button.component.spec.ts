import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshResultsButtonComponent } from './refresh-results-button.component';

describe('RefreshResultsButtonComponent', () => {
  let component: RefreshResultsButtonComponent;
  let fixture: ComponentFixture<RefreshResultsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshResultsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshResultsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
