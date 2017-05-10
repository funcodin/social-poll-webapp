import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Components
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/shared/topnav/topnav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ContactUsComponent} from './components/contact/contactus.component';
import {AboutUsComponent} from './components/about/about.component';
import { PollComponent } from './components/polls/poll.component';
import { PollCreatedComponent } from './components/user/created/pollcreated.component';

import { SignOutComponent } from './components/signout/signout.component';

import { PollVoted } from './components/user/voted/pollvoted.component';

//Services
import { SignupService } from './services/signup/signup.service';
import { SigninService } from './services/signin/signin.service';
import { PollService } from './services/poll/poll.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';


const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'poll', component: PollComponent},
  {path: 'voted', component: PollVoted},
  {path: 'asked', component: PollCreatedComponent},
  {path: 'signout', component: SignOutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ContactUsComponent,
    AboutUsComponent,
    PollComponent,
    PollVoted,
    PollCreatedComponent,
    SignOutComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot( appRoutes)
  ],
  providers: [
    SignupService,
    SigninService,
    PollService,
    CookieService

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
