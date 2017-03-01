import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { UserRegistationComponent} from './registration/user-registration.component';
import {UserLoginComponent} from './login/user-login.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, UserRegistationComponent,UserLoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
