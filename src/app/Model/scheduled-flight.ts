import { Time } from "@angular/common";


export class RequestFlightDetailsDTO {
   
    constructor(public flightNo: number,
       public flightName:string,
       public airline : string,
       public fromPlace:string,
       public toPlace :string,
       public startDate : string,
       public endDate : string,
       public boardingTime: string,
       public departureTime : string,
       public scheduledDays : string[],
       public instrument : string,
       public noOfBusinessClassSeats : string,
       public noOfNonBusinessClassSeats : string,
       public cost : string){}

 public contructor(){}

}
