import { Component, OnInit } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduledFlightService } from '../services/scheduled-flight.service';
import { RequestFlightDetailsDTO } from '../Model/scheduled-flight';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-scheduled-flight',
  templateUrl: './show-scheduled-flight.component.html',
  styleUrls: ['./show-scheduled-flight.component.css']
})
export class ShowScheduledFlightComponent implements OnInit {

  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  public scheduleFlights: any[]=[];
 

  constructor(public router: Router, public service: ScheduledFlightService
   ) { }

  ngOnInit(): void {

    if( sessionStorage.getItem('role')!=='admin' ){
      this.router.navigate(['/login']);

    }
    this.service.showScheduleFlights().subscribe(
      (data:RequestFlightDetailsDTO[])=>this.scheduleFlights=data
    );
  }

  removeScheduleFlight(flightNo:number){
    this.service.removeScheduleFlight(flightNo).subscribe();
    alert("Deleted");
    location.reload();
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
