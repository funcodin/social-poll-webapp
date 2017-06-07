import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications';

//Components
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/shared/topnav/topnav.component';
import { BottomNavComponent } from './components/shared/bottomnav/bottomnav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ContactUsComponent} from './components/contact/contactus.component';
import {AboutUsComponent} from './components/about/about.component';
import { PollComponent } from './components/polls/poll.component';
import { PollCreatedComponent } from './components/user/created/pollcreated.component';
import { CreatePollComponent } from './components/user/create/createpoll.component';
import { UserProfileComponent } from './components/user/profile/userprofile.component';

import { SignOutComponent } from './components/signout/signout.component';

import { PollVoted } from './components/user/voted/pollvoted.component';

//Services
import { SignupService } from './services/signup/signup.service';
import { SigninService } from './services/signin/signin.service';
import { PollService } from './services/poll/poll.service';
import { UserProfileService } from './services/profile/userprofile.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ContactUsService } from './services/contact/contact.service';


const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'poll', component: PollComponent},
  {path: 'voted', component: PollVoted},
  {path: 'asked', component: PollCreatedComponent},
  {path: 'create', component: CreatePollComponent},
  {path: 'signout', component: SignOutComponent},
  {path: 'profile', component: UserProfileComponent},
  { path: '**', component: HomeComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BottomNavComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ContactUsComponent,
    AboutUsComponent,
    PollComponent,
    PollVoted,
    PollCreatedComponent,
    CreatePollComponent,
    SignOutComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot( appRoutes)
  ],
  providers: [
    SignupService,
    SigninService,
    PollService,
    CookieService,
    UserProfileService,
    ContactUsService

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
