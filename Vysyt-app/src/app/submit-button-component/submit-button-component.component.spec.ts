import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitButtonComponentComponent } from './submit-button-component.component';

describe('SubmitButtonComponentComponent', () => {
  let component: SubmitButtonComponentComponent;
  let fixture: ComponentFixture<SubmitButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitButtonComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
