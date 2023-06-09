import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphMainLimitComponent } from './graph-main-limit.component';

describe('GraphMainLimitComponent', () => {
  let component: GraphMainLimitComponent;
  let fixture: ComponentFixture<GraphMainLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphMainLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphMainLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
