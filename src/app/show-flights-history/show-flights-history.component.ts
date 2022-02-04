import { Component, OnInit,Inject } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BookedFlightService } from '../services/booked-flight.service';
import { FlightResponseDTO } from '../Model/response-booked-flight';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-show-flights-history',
  templateUrl: './show-flights-history.component.html',
  styleUrls: ['./show-flights-history.component.css']
})

export class ShowFlightsHistoryComponent implements OnInit {

  bookFlights : FlightResponseDTO[]=[];
  public pNR_Number : String='';
  public emailId : String='';

  response : FlightResponseDTO= new FlightResponseDTO('',0,'','','','','',[],0,'', '');
//show:boolean = false;
  constructor(public service : BookedFlightService,
    public router: Router
   ) { }

    

  ngOnInit(): void {
    if(sessionStorage.getItem('role')!=='user' ){
      this.router.navigate(['/login']);

    }
  }

  searchBookedFlight(emailId: String){
    this.service.showBookedFlightsHistory(emailId).subscribe(
      (data : FlightResponseDTO[])=>this.bookFlights=data
    );

    //const keys =Object.keys(this.bookFlights);
   // const values = Object.values(this.bookFlights);
    
  }

  removeBookedFlight(pNR_Number : String){
    this.service.removeBookedFlight(pNR_Number).subscribe();
    alert("Deleted");
    location.reload();
  }

  add(){

    this.router.navigate(['/bookedFlight/searchFlights']);
  
  }
  
  view(){
  
    this.router.navigate(['/bookedFlight/show']);
  
  }
  
  search(){
  
    this.router.navigate(['/bookedFlight/search']);
  
  }

}
