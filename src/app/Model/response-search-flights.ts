export class SearchFlightResultDTO{
    
    constructor(public date : Date,
        public flightId : number,
        public flightName : string,
        public flightPrice : string,
        public flightLogo :any){}
}