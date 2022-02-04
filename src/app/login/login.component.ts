import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../Model/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='';
  password = '';
  user: User={"userName":"", "userPassword":"", "userPhone": 0, "userEmail":"",  "roles":""};
  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService ) { }

    message : string='';

  ngOnInit(): void {
  }

  // Check user for authenticatoin
  checkLogin(username:string,password:string) {
   // this.loginservice.authenticate(this.username, this.password)
    if(this.loginservice.authenticate(this.username, this.password)) {
      this.loginservice.getRole(this.username).subscribe((data:User)=> {
        console.log(data);
        this.user = data;
        this.redirect();
      });
    }
    if((username!=='Anu' && password!=='anu@123') || (username!=='Raj Dhande' && password!=='Raj@123')) {
      console.log("Invalid Login Credentials..");
      this.message='Invalid Login Credentials..';
      this.invalidLogin = true;
    }
  }

  // Redirect based on the user role
  redirect() {
    if(this.user.roles === 'ROLE_USER') {
      sessionStorage.setItem('role', 'user');
      sessionStorage.setItem('userId', String(this.user.userName));
      this.invalidLogin = false;
      this.router.navigate(["/userpanel"]).then(()=> {
        window.location.reload();
      });
    }
    else if(this.user.roles === 'ROLE_ADMIN') {
      sessionStorage.setItem('role', 'admin');
      sessionStorage.setItem('userId', String(this.user.userName));
      this.invalidLogin = false;
      this.router.navigate(["/adminpanel"]).then(()=> {
        window.location.reload();
      });
    }
  }

}

