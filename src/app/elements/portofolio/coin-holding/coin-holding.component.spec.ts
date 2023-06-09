import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinHoldingComponent } from './coin-holding.component';

describe('CoinHoldingComponent', () => {
  let component: CoinHoldingComponent;
  let fixture: ComponentFixture<CoinHoldingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinHoldingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinHoldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
