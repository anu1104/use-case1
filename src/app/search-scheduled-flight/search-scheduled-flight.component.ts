import { Component, OnInit } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ScheduledFlightService } from '../services/scheduled-flight.service';
import { RequestFlightDetailsDTO } from 'src/app/Model/scheduled-flight';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-scheduled-flight',
  templateUrl: './search-scheduled-flight.component.html',
  styleUrls: ['./search-scheduled-flight.component.css']
})
export class SearchScheduledFlightComponent implements OnInit {

  show:boolean=false;
    scheduleFlight:RequestFlightDetailsDTO= new RequestFlightDetailsDTO(0,'','','','','','','','',[],
    '','','','');

    flightNo : number=0;

  constructor(public service: ScheduledFlightService, public router: Router
   ) { }

   

  ngOnInit(): void {
   // this.scheduleFlight=new ScheduledFlight();
   if(sessionStorage.getItem('role')!=='admin' ){
    this.router.navigate(['/login']);

  }
  }

  searchScheduleFlight(flightNo:Number):any{
    this.show=true;
    console.log(flightNo);
    this.service.searchScheduledFlight(flightNo).subscribe((scheduleFlight:RequestFlightDetailsDTO)=>this.scheduleFlight=scheduleFlight);
    console.log(this.scheduleFlight);
}

idValid:boolean=false;
validateId(){
    if(this.flightNo>9999){
        this.idValid=true;
    }
    else if(this.flightNo<1){
        this.idValid=true;
    }else{
        this.idValid=false;
    }6
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
