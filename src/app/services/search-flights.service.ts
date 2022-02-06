import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { SearchFlightResultDTO } from '../Model/response-search-flights';
import { Subject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class SearchFlightsService {

    constructor(private http: HttpClient) {
    }

    searchFlightsResult: any = [];

    private flighIdSource = new BehaviorSubject(this.searchFlightsResult);

    currentFlightId = this.flighIdSource.asObservable();

    changeFlightId(flightId: number) :Observable<any>{

    
        this.flighIdSource.next(flightId);

        return this.flighIdSource;
    }

    getFlightLogo(flightName:any):any{
        this.http.get('http://localhost:9191/api/v1.0/admin/flight/image/get/' + flightName);
    }

}