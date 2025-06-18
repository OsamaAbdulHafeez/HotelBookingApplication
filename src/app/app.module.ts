import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { BookingCalenderComponent } from './pages/booking-calender/booking-calender.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    RoomsComponent,
    NewBookingComponent,
    LayoutComponent,
    BookingListComponent,
    BookingCalenderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
