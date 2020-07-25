import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthMiddlewareGuard } from './auth-middleware.guard';
import { ProfileComponent } from './profile/profile.component';
import { ShellComponent } from './shell/shell.component';
import { Profile } from 'selenium-webdriver/firefox';
import { CalendarComponent } from './calendar/calendar.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent} from './contactus/contactus.component';


const routes: Routes = [
  // { path: '', component: RegisterComponent },
  { path: '', component: ShellComponent ,
  children: [
    { path: '', component: HomeComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'aboutus', component: AboutusComponent},
    { path: 'contactus', component: ContactusComponent},

 
    // { path: 'profile', component: ProfileComponent, canActivate: [AuthMiddlewareGuard] },

  ]
},
{ path: 'register', component: RegisterComponent },
{path: 'newaccount', component: NewaccountComponent },
{ path: 'forgotpassword', component: ForgotpasswordComponent},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
