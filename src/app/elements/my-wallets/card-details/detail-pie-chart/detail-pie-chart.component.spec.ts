import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPieChartComponent } from './detail-pie-chart.component';

describe('DetailPieChartComponent', () => {
  let component: DetailPieChartComponent;
  let fixture: ComponentFixture<DetailPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
