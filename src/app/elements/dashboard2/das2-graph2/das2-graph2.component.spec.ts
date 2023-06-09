import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Das2Graph2Component } from './das2-graph2.component';

describe('Das2Graph2Component', () => {
  let component: Das2Graph2Component;
  let fixture: ComponentFixture<Das2Graph2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Das2Graph2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Das2Graph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
