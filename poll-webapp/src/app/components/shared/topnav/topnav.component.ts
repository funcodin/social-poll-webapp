import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'top-nav',
  templateUrl:'topnav.component.html',
  styleUrls:['topnavbar.css']
})
export class TopNavComponent implements OnInit{
pollUser : any;

  constructor( private cookieService : CookieService){
  }

  ngOnInit(){
    this.pollUser = this.cookieService.getObject('pollUser');
  }


 isLoggedIn(): boolean{
   return this.pollUser == null;
 }

}
