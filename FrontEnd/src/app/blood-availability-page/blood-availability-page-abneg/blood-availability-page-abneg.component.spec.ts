import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodAvailabilityPageAbnegComponent } from './blood-availability-page-abneg.component';

describe('BloodAvailabilityPageAbnegComponent', () => {
  let component: BloodAvailabilityPageAbnegComponent;
  let fixture: ComponentFixture<BloodAvailabilityPageAbnegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodAvailabilityPageAbnegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodAvailabilityPageAbnegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
