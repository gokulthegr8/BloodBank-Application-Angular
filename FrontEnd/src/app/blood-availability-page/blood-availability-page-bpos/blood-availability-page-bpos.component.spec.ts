import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodAvailabilityPageBposComponent } from './blood-availability-page-bpos.component';

describe('BloodAvailabilityPageBposComponent', () => {
  let component: BloodAvailabilityPageBposComponent;
  let fixture: ComponentFixture<BloodAvailabilityPageBposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodAvailabilityPageBposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodAvailabilityPageBposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
