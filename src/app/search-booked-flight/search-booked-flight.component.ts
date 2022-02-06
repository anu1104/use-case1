import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookedFlightService } from '../services/booked-flight.service';
import { FlightResponseDTO } from '../Model/response-booked-flight';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-search-booked-flight',
  templateUrl: './search-booked-flight.component.html',
  styleUrls: ['./search-booked-flight.component.css'],
  providers: [DatePipe]
})
export class SearchBookedFlightComponent implements OnInit {

  response: FlightResponseDTO= new FlightResponseDTO('',0,'','','','','','',0,'',[],0,'', '');

  show: boolean = false;
   pNR_Number: String='';
   dateStr:any;
   dateStr1:any;
   arrayStr : string[]=[];
   arrayStr1 : string[]=[];
   cancel : boolean=true;

  constructor( public service: BookedFlightService,
    public router: Router,public  datePipe: DatePipe) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('role')!=='user'  ){
      this.router.navigate(['/login']);

    }
  }

  searchBookedFlight(pNR_Number: String): any {
    this.show = true;
    console.log(pNR_Number);
    this.service.searchBookedFlight(pNR_Number).subscribe((bookedFlight: FlightResponseDTO) => {
      this.response = bookedFlight;
      this.dateStr=this.datePipe.transform(this.response.journeyDate, 'yyyy/MM/dd');
      this.arrayStr=this.dateStr.split('/');
      this.response.journeyDate=this.dateStr;

      let today = new Date();
      this.dateStr=this.datePipe.transform(today, 'yyyy/MM/dd');
      this.arrayStr1=this.dateStr.split('/');
      if(Number(this.arrayStr[0])<Number(this.arrayStr1[0]) || Number(this.arrayStr[1])<Number(this.arrayStr1[1])
        || Number(this.arrayStr[3])<Number(this.arrayStr1[3])){
           this.cancel=false;
           
        }
        console.log(this.cancel);
    console.log(bookedFlight)});

  }

  removeBookedFlight(pNR_Number : String){
    this.service.removeBookedFlight(pNR_Number).subscribe();
    alert("Deleted");
    location.reload();
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
