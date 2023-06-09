import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailCoinChartComponent } from './coin-detail-coin-chart.component';

describe('CoinDetailCoinChartComponent', () => {
  let component: CoinDetailCoinChartComponent;
  let fixture: ComponentFixture<CoinDetailCoinChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinDetailCoinChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinDetailCoinChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
