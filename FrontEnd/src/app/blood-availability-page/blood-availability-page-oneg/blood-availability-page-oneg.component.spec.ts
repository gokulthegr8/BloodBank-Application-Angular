import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodAvailabilityPageOnegComponent } from './blood-availability-page-oneg.component';

describe('BloodAvailabilityPageOnegComponent', () => {
  let component: BloodAvailabilityPageOnegComponent;
  let fixture: ComponentFixture<BloodAvailabilityPageOnegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodAvailabilityPageOnegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodAvailabilityPageOnegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
