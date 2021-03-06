import {Component,ViewChild,OnInit} from '@angular/core';
import { NgForm} from '@angular/forms';
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

  updatePollUser: any;
  pollUser: any;
  genderList : string[] = ['FEMALE','MALE','NA'];

  @ViewChild('updateProfileForm') updateProfileForm : NgForm;

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

  onSubmit(){
    this.updatePollUser =  this.updateProfileForm.value
    console.log( 'updated poll user');
    console.log( this.updatePollUser );
    this.pollUser.gender = this.updatePollUser.gender;
    this.pollUser.email = this.updatePollUser.email;
    this.pollUser.contactNumber = this.updatePollUser.contactNumber;
    console.log( 'poll user');
    console.log( JSON.stringify(this.pollUser) );
    this.userProfileService.updateUserProfile( JSON.stringify(this.pollUser) )
    .subscribe(
      (response : Response ) => {
        console.log( response );
        this.router.navigate(['/poll']);
    },
      (error) => {
        console.log( error );
      }
    )
  }

  selectGender( gender : string ){
    this.pollUser.gender = gender;
  }

}
