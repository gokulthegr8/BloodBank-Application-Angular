import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodAvailabilityPageBnegComponent } from './blood-availability-page-bneg.component';

describe('BloodAvailabilityPageBnegComponent', () => {
  let component: BloodAvailabilityPageBnegComponent;
  let fixture: ComponentFixture<BloodAvailabilityPageBnegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodAvailabilityPageBnegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodAvailabilityPageBnegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
