import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'bottom-nav',
  templateUrl:'bottomnav.component.html',
  styleUrls:['bottomnavbar.css']
})
export class BottomNavComponent implements OnInit{
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
