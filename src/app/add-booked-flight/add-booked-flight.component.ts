import { Component, OnInit,ViewChild } from '@angular/core';
//import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightRegistrationDTO } from '../Model/booked-flight';
import { BookedFlightService } from '../services/booked-flight.service';

import {SearchFlightsService} from '../services/search-flights.service';
import { MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Passenger } from '../Model/passenger';

import { PassengerService } from '../services/passenger.service';
import { PassengerComponent } from '../passenger/passenger.component';


const ELEMENT_DATA : Passenger[] =[];

@Component({
  selector: 'app-add-booked-flight',
 
  templateUrl: './add-booked-flight.component.html',
  styleUrls: ['./add-booked-flight.component.css'],
  
})


export class AddBookedFlightComponent implements OnInit {

  constructor( public bookFlightService: BookedFlightService, private router: Router, private route: ActivatedRoute,
   public searchFlightservice : SearchFlightsService ,public dialog: MatDialog ,
   public _passengerService : PassengerService
   ) {

  }
  
  isPopupOpened = true;
  dataSelected : string='';
  radioSelected : string ='';
  radio : any=['YES','NO'];
  mappedValue: string='';
  tableFlag=false;
  displayedColumns: string[] = ['firstName', 'lastName', 'gender', 'age', 'seatNo'];
  dataSource = ELEMENT_DATA;
  passenger : any ;
  passengerList : Passenger[]=[];
  passengers:string='';
  passenger1 : any;
  radio1 : any=['FEMALE','MALE'];
    radioSelected1 : string ='';
    dataSelected1 : string ='';
    seatList:string[]=['1A','2A','3A','4A','5A','1B','2B','3B','4B','5B',
       '1C','2C','3C','4C','5C','1D','2D','3D','4D','5D'];

  flightId : number=0;
  date :any;
  source:any;
  destination:any;
  id: any ='';
  bookedFlight: FlightRegistrationDTO= new FlightRegistrationDTO(0,'','',new Date(),'','','',0,'',[],0,'','');

  ngOnInit(): void {
    
    if(sessionStorage.getItem('role')!=='user' ){
      this.router.navigate(['/login']);

    }

   this.flightId= this.route.snapshot.queryParams['data'];
   //this.date= this.route.snapshot.queryParams['date'];
 // this.passengerList= this.route.snapshot.queryParams['list'];
   this.id=(sessionStorage.getItem('Id'));
   this.source=(sessionStorage.getItem('source'));
   this.destination=(sessionStorage.getItem('destination'));
   //this.date=(sessionStorage.getItem('date'));
   
   this.passenger= sessionStorage.getItem('passengerList');
this.passenger1=JSON.parse(this.passenger);
   this.passengerList.push(this.passenger1);
   
   
   console.log(this.passengerList);
  
  
  }

  addPassenger(){
   /* this.isPopupOpened=true;
    const dialogRef = this.dialog.open(PassengerComponent,{
      data :{}
    });
 // this.passengerList=this._passengerService.passengerList;

  dialogRef.afterClosed().subscribe(result =>{
    this.isPopupOpened = false;
  });*/


this.router.navigate(['/passenger']);
  this.tableFlag=true;
}


  onDataSelected(event:any){
    this.dataSelected=event.target.value;
  }

  radioChanged(event : any){
    this.radioSelected= event.target.value;
  }

  radioChanged1(event : any){
    this.radioSelected1= event.target.value;
  }

  onDataSelected1(event:any){
    this.dataSelected1=event.target.value;
  }

  addBookedFlight(bookedFlight: FlightRegistrationDTO){
    // alert(sa+da+ ddt+ adt);
    bookedFlight.flightId = this.id;
    bookedFlight.source=this.source;
    bookedFlight.destination=this.destination
    bookedFlight.typeOfMeal=this.dataSelected;
    bookedFlight.meal=this.radioSelected;
    bookedFlight.gender=this.radioSelected1;
    bookedFlight.seatNo=this.dataSelected1;
    bookedFlight.passengers=this.passengerList;
     this.bookFlightService.addBookFlight( bookedFlight,this.flightId).subscribe();
     console.log(bookedFlight.typeOfMeal);
     console.log(bookedFlight.meal);
     console.log(bookedFlight.gender);
     console.log(bookedFlight.age);
     console.log(bookedFlight.seatNo);
     alert("Flight Ticket Created");
    // window.location.reload();

}
idValid:boolean=false;
validateId(){
    if(this.bookedFlight.flightId>999){
        this.idValid=true;
    }
    else if(this.bookedFlight.flightId<1){
        this.idValid=true;
    }else{
        this.idValid=false;
    }
}

buttonFlag:boolean=false;
enableButton(){
    this.buttonFlag=!this.idValid;
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

