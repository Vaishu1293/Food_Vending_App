import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCryptoStatisticsComponent } from './graph-crypto-statistics.component';

describe('GraphCryptoStatisticsComponent', () => {
  let component: GraphCryptoStatisticsComponent;
  let fixture: ComponentFixture<GraphCryptoStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCryptoStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCryptoStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
