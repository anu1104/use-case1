import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Passenger } from '../Model/passenger';

import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  

  constructor(public _formBuilder : FormBuilder,
  public router : Router,
    public _passengerService : PassengerService, 
   ) { }

    public passenger = new Passenger('','','',0,'');

    public passengerList : Passenger[]=[];

    radio : any=['FEMALE','MALE'];
    radioSelected : string ='';
    dataSelected : string ='';
    seatList:string[]=['1A','2A','3A','4A','5A','1B','2B','3B','4B','5B',
       '1C','2C','3C','4C','5C','1D','2D','3D','4D','5D'];

    /*onNoClick():void{
      this.dialogRef.close();
    }*/
  ngOnInit(): void {

   /* this._passengerForm=this._formBuilder.group({
      firstName :['',[Validators.required]],
      lastName :['',[Validators.required]],
      gender :['',Validators.required],
      age :['',Validators.required],
      seatNo :['', Validators.required]
    });*/
  }

  /*onSubmit(){
    this._passengerService.addPassenger(this._passengerForm.value);
    this.dialogRef.close();
  }*/

  addPassenger(passenger: Passenger){
  //  this.passengerList.push(passenger);
  this.passenger.gender=this.radioSelected;
  this.passenger.seatNo=this.dataSelected;
    console.log( this.passenger);
    sessionStorage.setItem('passengerList',JSON.stringify(this.passenger));
  }

  radioChanged(event : any){
    this.radioSelected= event.target.value;
  }

  onDataSelected(event:any){
    this.dataSelected=event.target.value;
  }


  back(){
    this.router.navigate(['/bookedFlight/add'],{queryParams :{list :this.passengerList }});
  }

}
