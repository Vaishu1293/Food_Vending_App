import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailQuickTransferComponent } from './coin-detail-quick-transfer.component';

describe('CoinDetailQuickTransferComponent', () => {
  let component: CoinDetailQuickTransferComponent;
  let fixture: ComponentFixture<CoinDetailQuickTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinDetailQuickTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinDetailQuickTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
