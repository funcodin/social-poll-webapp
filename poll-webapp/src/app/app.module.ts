import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopNavComponent } from './components/shared/topnav/topnav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ContactUsComponent} from './components/contact/contactus.component';
import {AboutUsComponent} from './components/about/about.component';
import { SignupService } from './services/signup/signup.service';

const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'about', component: AboutUsComponent},
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

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( appRoutes)
  ],
  providers: [ SignupService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
