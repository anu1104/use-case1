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
    console.log( this.passenger);
    sessionStorage.setItem('passengerList',JSON.stringify(this.passenger));
  }

  back(){
    this.router.navigate(['/bookedFlight/add'],{queryParams :{list :this.passengerList }});
  }

}
