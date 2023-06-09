import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Das2BuyOrderComponent } from './das2-buy-order.component';

describe('Das2BuyOrderComponent', () => {
  let component: Das2BuyOrderComponent;
  let fixture: ComponentFixture<Das2BuyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Das2BuyOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Das2BuyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
