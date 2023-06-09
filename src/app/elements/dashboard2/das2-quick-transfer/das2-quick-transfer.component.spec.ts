import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Das2QuickTransferComponent } from './das2-quick-transfer.component';

describe('Das2QuickTransferComponent', () => {
  let component: Das2QuickTransferComponent;
  let fixture: ComponentFixture<Das2QuickTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Das2QuickTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Das2QuickTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
