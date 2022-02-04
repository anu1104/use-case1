import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScheduledFlightComponent } from './show-scheduled-flight.component';

describe('ShowScheduledFlightComponent', () => {
  let component: ShowScheduledFlightComponent;
  let fixture: ComponentFixture<ShowScheduledFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowScheduledFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScheduledFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
