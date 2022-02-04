export class SearchFlightDTO{

    constructor(public fromPlace : string,
        public toPlace : string,
        public date : Date,
        //public toDate : string,
        public roundTrip : string,
        public oneWayTrip : string){}
}