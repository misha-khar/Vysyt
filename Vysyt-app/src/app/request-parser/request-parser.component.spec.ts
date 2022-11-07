import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestParserComponent } from './request-parser.component';

describe('RequestParserComponent', () => {
  let component: RequestParserComponent;
  let fixture: ComponentFixture<RequestParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestParserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
