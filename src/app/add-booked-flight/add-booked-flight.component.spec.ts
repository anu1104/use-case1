import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookedFlightComponent } from './add-booked-flight.component';

describe('AddBookedFlightComponent', () => {
  let component: AddBookedFlightComponent;
  let fixture: ComponentFixture<AddBookedFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookedFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookedFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
