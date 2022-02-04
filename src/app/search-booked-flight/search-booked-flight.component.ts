import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookedFlightService } from '../services/booked-flight.service';
import { FlightResponseDTO } from '../Model/response-booked-flight';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-booked-flight',
  templateUrl: './search-booked-flight.component.html',
  styleUrls: ['./search-booked-flight.component.css']
})
export class SearchBookedFlightComponent implements OnInit {

  response: FlightResponseDTO= new FlightResponseDTO('',0,'','','','','',[],0,'', '');

  show: boolean = false;
   pNR_Number: String='';

  constructor( public service: BookedFlightService,
    public router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('role')!=='user'  ){
      this.router.navigate(['/login']);

    }
  }

  searchBookedFlight(pNR_Number: String): any {
    this.show = true;
    console.log(pNR_Number);
    this.service.searchBookedFlight(pNR_Number).subscribe((bookedFlight: FlightResponseDTO) => {this.response = bookedFlight;
    console.log(bookedFlight)});

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
