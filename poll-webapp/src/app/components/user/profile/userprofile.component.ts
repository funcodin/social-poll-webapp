import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '../../../services/profile/userprofile.service';
import { Response } from '@angular/http';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'angular2-cookie/core';
import {NotificationsService} from 'angular2-notifications';


@Component({
  selector: 'user-profile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['userprofile.component.scss']
})
export class UserProfileComponent implements OnInit {

  pollUser: any;

  constructor( private userProfileService: UserProfileService, private cookieService : CookieService, private router : Router, private notificationService : NotificationsService){

  }


  ngOnInit(){
    this.pollUser = this.cookieService.getObject('pollUser');
    if( this.pollUser === undefined ){
      this.router.navigate(['/login']);
    }
    console.log( this.pollUser);
    this.getUserProfile( this.pollUser.username);
  }

  getUserProfile( userName : string ){
    this.userProfileService.getUserProfile(userName)
    .subscribe(
      (response : Response ) => {
        console.log( response );
        this.pollUser = response.json();
    },
      (error) => {
        console.log( error )
      }
    )
  }

}
