import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('role')!=='user'  ){
      this.router.navigate(['/login']);

    }
  }

  addBookedFlight(): void{
    this.router.navigate(['bookedFlight/searchFlights']);
  }

  viewBookedFlight(): void{
    this.router.navigate(['bookedFlight/show']);
  }

  searchBookedFlight(): void{
      this.router.navigate(['bookedFlight/search']);
  }

  modifyBookedFlight(): void{
    this.router.navigate(['bookedFlight/modify']);
  }


  

}
