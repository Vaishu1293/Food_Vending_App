import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletCoinChartComponent } from './wallet-coin-chart.component';

describe('WalletCoinChartComponent', () => {
  let component: WalletCoinChartComponent;
  let fixture: ComponentFixture<WalletCoinChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletCoinChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletCoinChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
