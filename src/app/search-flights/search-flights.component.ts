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
  retrieveResonse: any;
  base64Data: any;
  retrievedImage: any;
  

  constructor(public bookFlightService: BookedFlightService, public router: Router, public route: ActivatedRoute,
    public searchFlightservice : SearchFlightsService ) {

  }

  result: SearchFlightResultDTO[] = [];
  show: boolean=false;
  public date:Date=new Date();
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
    console.log(this.radioSelected);
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
      
      //searchFlightservice.getFlightLogo(this.result.flightName);
      this.show=true;
      sessionStorage.setItem('source',searchedFlight.fromPlace);
      sessionStorage.setItem('destination',searchedFlight.toPlace);
      //sessionStorage.setItem('date',searchedFlight.date);
      this.date=searchedFlight.date;
      console.log(this.result);

    //  alert("Flight Ticket Created");

  }

  getFlightLogo(flightName:any){
    this.searchFlightservice.getFlightLogo(flightName).subscribe(
      ( res: any) => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        console.log(this.retrievedImage);
      }
    );
   return this.retrievedImage;
  }


  getFlightId(flightId: number) {

    this.router.navigate(['/bookedFlight/add'], {queryParams: {data : flightId, date : this.date}});
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

