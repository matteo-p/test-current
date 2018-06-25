import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAppComponent } from './result-app.component';

describe('ResultAppComponent', () => {
  let component: ResultAppComponent;
  let fixture: ComponentFixture<ResultAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
