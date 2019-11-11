import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodAvailabilityPageAbposComponent } from './blood-availability-page-abpos.component';

describe('BloodAvailabilityPageAbposComponent', () => {
  let component: BloodAvailabilityPageAbposComponent;
  let fixture: ComponentFixture<BloodAvailabilityPageAbposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodAvailabilityPageAbposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodAvailabilityPageAbposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
