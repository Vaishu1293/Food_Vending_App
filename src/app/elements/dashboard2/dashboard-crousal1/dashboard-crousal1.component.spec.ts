import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCrousal1Component } from './dashboard-crousal1.component';

describe('DashboardCrousal1Component', () => {
  let component: DashboardCrousal1Component;
  let fixture: ComponentFixture<DashboardCrousal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCrousal1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCrousal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
