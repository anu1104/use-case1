import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookedFlightComponent } from './add-booked-flight/add-booked-flight.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchBookedFlightComponent } from './search-booked-flight/search-booked-flight.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { SearchScheduledFlightComponent } from './search-scheduled-flight/search-scheduled-flight.component';
import { ShowFlightsHistoryComponent } from './show-flights-history/show-flights-history.component';
import { ShowScheduledFlightComponent } from './show-scheduled-flight/show-scheduled-flight.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { PassengerComponent } from './passenger/passenger.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PassengerService } from './services/passenger.service';
//import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddBookedFlightComponent,
    AddScheduledFlightComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    SearchBookedFlightComponent,
    SearchFlightsComponent,
    SearchScheduledFlightComponent,
    ShowFlightsHistoryComponent,
    ShowScheduledFlightComponent,
    SignupComponent,
    WelcomeAdminComponent,
    WelcomeUserComponent,
    PassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    //DatePipe
  ],
  providers: [PassengerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
