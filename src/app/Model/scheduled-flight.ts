

export class RequestFlightDetailsDTO {
   
    constructor(public flightNo: number,
       public airline : string,
       public fromPlace:string,
       public toPlace :string,
       public startDate : string,
       public endDate : string,
       
       public scheduledDays : string[],
       public instrument : string,
       public noOfBusinessClassSeats : string,
       public noOfNonBusinessClassSeats : string,
       public cost : string){}

 public contructor(){}

}
