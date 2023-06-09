import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletActivityComponent } from './wallet-activity.component';

describe('WalletActivityComponent', () => {
  let component: WalletActivityComponent;
  let fixture: ComponentFixture<WalletActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
