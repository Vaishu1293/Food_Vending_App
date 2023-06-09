import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Das2Graph1Component } from './das2-graph1.component';

describe('Das2Graph1Component', () => {
  let component: Das2Graph1Component;
  let fixture: ComponentFixture<Das2Graph1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Das2Graph1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Das2Graph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
