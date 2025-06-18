import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingCalenderComponent } from './pages/booking-calender/booking-calender.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'rooms',
        component: RoomsComponent,
      },
      {
        path: 'newBooking',
        component: NewBookingComponent,
      },
      {
        path: 'booking',
        component: BookingListComponent,
      },
      {
        path: 'bookingCalender',
        component: BookingCalenderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
