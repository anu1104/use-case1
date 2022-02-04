import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookedFlightService } from '../services/booked-flight.service';
import { SearchFlightDTO } from '../Model/request-search-flight'
import { SearchFlightResultDTO } from '../Model/response-search-flights';
import { AddBookedFlightComponent } from '../add-booked-flight/add-booked-flight.component';
import {SearchFlightsService } from '../services/search-flights.service';
import { BrowserAnimationsModule ,NoopAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  constructor(public bookFlightService: BookedFlightService, public router: Router, public route: ActivatedRoute,
    public searchFlightservice : SearchFlightsService ) {

  }

  result: SearchFlightResultDTO[] = [];
  show: boolean=false;
  radioSelected : string ='';
 radio : any=['One-Way','Two-Way'];

  searchedFlight: SearchFlightDTO = new SearchFlightDTO('', '', new Date(), '', '');

  ngOnInit(): void {

    if(sessionStorage.getItem('role')!=='user' ){
      this.router.navigate(['/login']);

    }
    sessionStorage.removeItem('Id');
    sessionStorage.removeItem('passengerList');
  }

  radioChanged(event : any){
    this.radioSelected= event.target.value;
  }



  searchedFlights(searchedFlight: SearchFlightDTO) {
    // alert(sa+da+ ddt+ adt);

    if(this.radioSelected==='One-Way'){
      searchedFlight.oneWayTrip='true';
      searchedFlight.roundTrip ='false';
    }
    if(this.radioSelected==='Two-Way'){
      searchedFlight.oneWayTrip='false';
      searchedFlight.roundTrip ='true';
    }

    this.bookFlightService.searchFlight(searchedFlight).subscribe(
      (data: SearchFlightResultDTO[]) => this.result = data
  
      );
      this.show=true;

    //  alert("Flight Ticket Created");

  }
  getFlightId(flightId: number) {

    this.router.navigate(['/bookedFlight/add'], {queryParams: {data : flightId}});
    sessionStorage.setItem('Id',flightId.toString());

  }


  add() {

    this.router.navigate(['/bookedFlight/searchFlights']);

  }

  view() {

    this.router.navigate(['/bookedFlight/show']);

  }

  search() {

    this.router.navigate(['/bookedFlight/search']);

  }
}

