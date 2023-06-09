import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkDataComponent } from './bulk-data.component';

describe('BulkDataComponent', () => {
  let component: BulkDataComponent;
  let fixture: ComponentFixture<BulkDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
