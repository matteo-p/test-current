import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbHeaderComponent } from './bb-header.component';

describe('BbHeaderComponent', () => {
  let component: BbHeaderComponent;
  let fixture: ComponentFixture<BbHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
