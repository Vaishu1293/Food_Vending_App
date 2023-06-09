import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Das2SellOrderComponent } from './das2-sell-order.component';

describe('Das2SellOrderComponent', () => {
  let component: Das2SellOrderComponent;
  let fixture: ComponentFixture<Das2SellOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Das2SellOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Das2SellOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
