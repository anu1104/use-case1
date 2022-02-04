import { Component, OnInit } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RequestFlightDetailsDTO } from '../Model/scheduled-flight';
import { ScheduledFlightService } from '../services/scheduled-flight.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-scheduled-flight',
  templateUrl: './add-scheduled-flight.component.html',
  styleUrls: ['./add-scheduled-flight.component.css']
})
export class AddScheduledFlightComponent implements OnInit {

  scheduleFlight:RequestFlightDetailsDTO=new RequestFlightDetailsDTO(0,'','','','','',[],
  '','','','');

  //scheduleFlight:ScheduledFlight={scheduleFlightId:null, availableSeats:null, flight:null,schedule:null};

  constructor( public scheduleFlightService: ScheduledFlightService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    if( sessionStorage.getItem('role')!=='admin' ){
      this.router.navigate(['/login']);

    }
  }

  addScheduleFlight(scheduleFlight: RequestFlightDetailsDTO){
   // alert(sa+da+ ddt+ adt);
    
    this.scheduleFlightService.addScheduleFlight( scheduleFlight).subscribe();
    alert("Schedule Flight added");
  }

  idValid:boolean=false;
    validateId(){
        if(this.scheduleFlight.flightNo>999){
            this.idValid=true;
        }
        else if(this.scheduleFlight.flightNo<1){
            this.idValid=true;
        }else{
            this.idValid=false;
        }
    }

  airportValid:boolean=false;
    validateAirports(a:string, b:string){
        if(a.toLowerCase()===b.toLowerCase()){
            this.airportValid=true;
        }else{
            this.airportValid=false;
        }
        this.enableButton();
  }

  buttonFlag:boolean=false;
    enableButton(){
        this.buttonFlag=!this.idValid;
    }

    add(){

      this.router.navigate(['/scheduledFlight/add']);

  }

  view(){

      this.router.navigate(['/scheduledFlight/show']);

  }

  search(){

      this.router.navigate(['/scheduledFlight/search']);

  }
}
