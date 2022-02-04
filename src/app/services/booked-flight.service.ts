import { Injectable } from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { FlightRegistrationDTO } from '../Model/booked-flight';
import { FlightResponseDTO } from '../Model/response-booked-flight';
import{SearchFlightDTO } from '../Model/request-search-flight';

@Injectable({
  providedIn: 'root'
})

export class BookedFlightService {
 
  constructor(private http: HttpClient) { 
  }

   url='http://localhost:9191/api/v1.0/user/flight';

   token:any;
  

  addBookFlight(bookFlight:FlightRegistrationDTO,flightId : number){

    this.token=  sessionStorage.getItem('token');

      const headers = new HttpHeaders()
      .set('Authorization', this.token);
      
    
    console.log(headers); 
    console.log(bookFlight);   
    
    return this.http.post(this.url +'/booking/'+bookFlight.flightId,bookFlight);
  }

  searchBookedFlight( pNR_Number : String ):Observable<any> {

    this.token=  sessionStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Authorization', this.token);

    return this.http.get(this.url+'/ticket/'+pNR_Number);
  }

  showBookedFlightsHistory(emailId:String): Observable<any> {

    this.token=  sessionStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Authorization', this.token);

    return this.http.get(this.url+'/booking/history/'+emailId);
  }

  removeBookedFlight(pNR_Number : String){

    this.token=  sessionStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Authorization', this.token);

    return this.http.delete(this.url+'/booking/cancel/'+pNR_Number);
 }

 searchFlight(request : SearchFlightDTO): Observable<any>{

  this.token=  sessionStorage.getItem('token');

  const headers = new HttpHeaders()
  .set('Authorization', this.token);

     return this.http.post(this.url +'/search',request,);
 }

}
