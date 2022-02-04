import { Injectable } from "@angular/core";
import { Passenger } from "../Model/passenger";

@Injectable({
    providedIn: 'root'
  })
export class PassengerService{
    passengerList  : Passenger[]=[];

    constructor(){}

    addPassenger(passenger : Passenger){
        this.passengerList.push(passenger);
        console.log(this.passengerList);
    }
}