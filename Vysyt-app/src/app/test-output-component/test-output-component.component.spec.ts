import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOutputComponentComponent } from './test-output-component.component';

describe('TestOutputComponentComponent', () => {
  let component: TestOutputComponentComponent;
  let fixture: ComponentFixture<TestOutputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOutputComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOutputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
