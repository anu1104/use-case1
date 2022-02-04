import { Passenger } from "./passenger";


 export class FlightRegistrationDTO{

    constructor(public flightId : number,
        public name : string,
        public emailId : string,
        public journeyDate : Date,
        public source : string,
        public destination : string,
        public passengers : Passenger[],
        public noOfPassenger : number,
        public meal : string,
       public typeOfMeal : string ){}

    
//public constructor(){}

 }