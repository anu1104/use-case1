import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { RequestFlightDetailsDTO } from '../Model/scheduled-flight';

@Injectable({
  providedIn: 'root'
})

export class ScheduledFlightService  {
 
  constructor(private http: HttpClient) { 
  }

   url='http://localhost:9191/api/v1.0/admin/flight';
   token:any;
 
  

  addScheduleFlight(scheduleFlight:RequestFlightDetailsDTO){

  this.token=  sessionStorage.getItem('token');

      const headers = new HttpHeaders()
      .set('Authorization',this.token );
      
    
    console.log(headers); 
    console.log(scheduleFlight);   
    return this.http.post(this.url +'/airline/inventory/add',scheduleFlight);
  }

  searchScheduledFlight(flightNo: Number):any {

    this.token=  sessionStorage.getItem('token');
    const headers = new HttpHeaders()
    .set('Authorization', this.token)
    .set('Access-Control-Allow-Origin','*');
    console.log(flightNo);
    return this.http.get(this.url+'/airline/inventory/search/'+flightNo,);
  }

  showScheduleFlights(): any {

    this.token=  sessionStorage.getItem('token');

    const headers = new HttpHeaders()
    .set('Authorization', this.token);
    return this.http.get(this.url+'/airline/inventory/viewAll');
  }

  removeScheduleFlight(flightNo:number){

    this.token=  sessionStorage.getItem('token');
    const headers = new HttpHeaders()
    .set('Authorization', this.token);
    return this.http.delete(this.url+'/airline/inventory/block/'+flightNo
    );
 }
 
 uploadLogo(uploadImageData:any,flightName:any):any{
 return  this.http.post(this.url+'/image/upload/'+flightName, uploadImageData)
  
 }

}
