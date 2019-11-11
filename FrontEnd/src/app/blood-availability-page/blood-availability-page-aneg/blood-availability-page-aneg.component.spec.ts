import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodAvailabilityPageAnegComponent } from './blood-availability-page-aneg.component';

describe('BloodAvailabilityPageAnegComponent', () => {
  let component: BloodAvailabilityPageAnegComponent;
  let fixture: ComponentFixture<BloodAvailabilityPageAnegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodAvailabilityPageAnegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodAvailabilityPageAnegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
