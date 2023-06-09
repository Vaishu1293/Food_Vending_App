import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Das2Graph3Component } from './das2-graph3.component';

describe('Das2Graph3Component', () => {
  let component: Das2Graph3Component;
  let fixture: ComponentFixture<Das2Graph3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Das2Graph3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Das2Graph3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
