import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {

    this.authenticationService.logOut();
    sessionStorage.setItem('role', '');
    sessionStorage.setItem('userId', '');
    this.router.navigate(['login']);
  }

}
