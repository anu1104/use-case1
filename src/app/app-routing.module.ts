import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { SearchScheduledFlightComponent } from './search-scheduled-flight/search-scheduled-flight.component';
import {WelcomeUserComponent} from './welcome-user/welcome-user.component';
import {WelcomeAdminComponent} from './welcome-admin/welcome-admin.component';
import {AddScheduledFlightComponent} from './add-scheduled-flight/add-scheduled-flight.component';
import {ShowScheduledFlightComponent} from './show-scheduled-flight/show-scheduled-flight.component';
import {SearchBookedFlightComponent} from './search-booked-flight/search-booked-flight.component';
import {ShowFlightsHistoryComponent} from './show-flights-history/show-flights-history.component';
import {SearchFlightsComponent} from './search-flights/search-flights.component';
import { AddBookedFlightComponent } from './add-booked-flight/add-booked-flight.component';
import { PassengerComponent } from './passenger/passenger.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'signup', component: SignupComponent},
  {path :'userpanel', component : WelcomeUserComponent },
  {path: 'scheduledFlight/search', component:SearchScheduledFlightComponent},
  {path :'adminpanel', component : WelcomeAdminComponent},
  {path :'scheduledFlight/add', component : AddScheduledFlightComponent},
  {path :'scheduledFlight/show', component : ShowScheduledFlightComponent},
  {path :'bookedFlight/search', component : SearchBookedFlightComponent},
  {path :'bookedFlight/show',   component : ShowFlightsHistoryComponent},
  {path :'bookedFlight/searchFlights',   component : SearchFlightsComponent},
  {path : 'bookedFlight/add', component : AddBookedFlightComponent},
  {path : 'passenger', component : PassengerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
