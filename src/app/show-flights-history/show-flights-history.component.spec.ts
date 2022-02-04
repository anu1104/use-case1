import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFlightsHistoryComponent } from './show-flights-history.component';

describe('ShowFlightsHistoryComponent', () => {
  let component: ShowFlightsHistoryComponent;
  let fixture: ComponentFixture<ShowFlightsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFlightsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFlightsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
