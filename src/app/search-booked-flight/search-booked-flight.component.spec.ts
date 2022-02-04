import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookedFlightComponent } from './search-booked-flight.component';

describe('SearchBookedFlightComponent', () => {
  let component: SearchBookedFlightComponent;
  let fixture: ComponentFixture<SearchBookedFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBookedFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookedFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
