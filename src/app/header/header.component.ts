import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  buttonFlag:boolean=false;
  username:string | null="";
  user:boolean=false;
  admin:boolean=false;

  constructor(){}

  ngOnInit(){
      this.user=false;
      this.admin=false;
      if(sessionStorage.getItem('role')==='user'){
        console.log('logout');
          this.user=true;
          this.buttonFlag=true;
      }else if(sessionStorage.getItem('role')==='admin'){
          this.admin=true;
          this.buttonFlag=true;
      }
      // this.buttonFlag=this.authenticationService.isUserLoggedIn();
      this.username=sessionStorage.getItem('username');
      if(this.username!=null)
          this.username=this.username.toUpperCase();
  }

}
