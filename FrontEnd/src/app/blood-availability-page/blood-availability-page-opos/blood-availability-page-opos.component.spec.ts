import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodAvailabilityPageOposComponent } from './blood-availability-page-opos.component';

describe('BloodAvailabilityPageOposComponent', () => {
  let component: BloodAvailabilityPageOposComponent;
  let fixture: ComponentFixture<BloodAvailabilityPageOposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodAvailabilityPageOposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodAvailabilityPageOposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
