import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodAvailabilityPageComponent } from './blood-availability-page.component';

describe('BloodAvailabilityPageComponent', () => {
  let component: BloodAvailabilityPageComponent;
  let fixture: ComponentFixture<BloodAvailabilityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodAvailabilityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodAvailabilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
