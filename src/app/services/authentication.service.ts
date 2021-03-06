import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  //Retrieves user token and checks authentication
  authenticate(username:string, password:string) {

    return this.httpClient.post<any>('http://localhost:9091/authenticate',
    {username, password}).subscribe(
      userData => {
        console.log(userData.token);
        sessionStorage.setItem('username', username);
        let tokenStr = 'Bearer' +' '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
      }
    );
  }

  // Checks whether the user is logged in
  isUserLoggedIn():boolean {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  // Removes user session(logout)
  logOut() {
    sessionStorage.removeItem('username');
  }

  // Retrives role of user(customer/admin)
  getRole(username:string):any {
    return this.httpClient.get('http://localhost:9191/api/v1.0/flightmgmt/getRole?username='+ username);
  }

  // Adds a new User
  signUp(user: User) {
    return this.httpClient.post('http://localhost:9191/api/v1.0/flightmgmt/registration', user);
  }


}
