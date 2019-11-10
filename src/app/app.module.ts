import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpService } from './sign-up.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthMiddlewareGuard } from './auth-middleware.guard';
import { ProfileComponent } from './profile/profile.component';
import { AppointmentComponent } from './appointments/appointment.component';
import { HeaderComponent } from './common/header/header.component';
import { ShellComponent } from './shell/shell.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    AppointmentComponent,
    HeaderComponent,
    ShellComponent,
    SidebarComponent,
    CalendarComponent,
    NewaccountComponent,
    SalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SignUpService, AuthMiddlewareGuard, RegisterComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
