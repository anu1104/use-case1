import { Passenger } from "./passenger";


export class FlightResponseDTO{

    constructor(public pNR_Number : String,
        public flightId : number,
        public name : string,
        public emailId : string,
        public journeyDate : string,
        public source : string,
        public destination : string,
        public gender : string,
        public age : number,
        public seatNo :string,
        public passengers : Passenger[],
        public noOfPassenger : number,
        public meal : string,
        public typeOfMeal : string){}
}