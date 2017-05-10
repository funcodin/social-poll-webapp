import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'sign-out',
  templateUrl:'./signout.component.html'
})
export class SignOutComponent implements OnInit{

  constructor(private cookieService : CookieService, private router : Router){
  }

  ngOnInit() {
    this.cookieService.remove('pollUser');
    this.router.navigate(['']);
  }

}
