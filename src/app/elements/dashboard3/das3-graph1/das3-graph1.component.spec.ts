import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Das3Graph1Component } from './das3-graph1.component';

describe('Das3Graph1Component', () => {
  let component: Das3Graph1Component;
  let fixture: ComponentFixture<Das3Graph1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Das3Graph1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Das3Graph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
