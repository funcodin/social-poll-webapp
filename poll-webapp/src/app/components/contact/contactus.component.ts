import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactUsService } from '../../services/contact/contact.service';
import {NotificationsService} from 'angular2-notifications';
import {Router} from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
import { Response } from '@angular/http';

@Component({
  selector:'contact-us',
  templateUrl: './contactus.component.html',
  styleUrls:['contactus.css']
})
export class ContactUsComponent implements OnInit {

  contactEmail: any;

  @ViewChild('contactUsForm') contactUsForm : NgForm;

  constructor( private contactUsService: ContactUsService, private cookieService : CookieService, private router : Router, private notificationService : NotificationsService){

  }

  onSubmit(){
    this.contactEmail = this.contactUsForm.value;
    console.log( this.contactEmail);
    this.contactUsService.sendContactUsEmail( JSON.stringify(this.contactEmail ))
    .subscribe(
      (response: Response ) => {
        console.log( response.json() );
        this.contactUsForm.reset();
      },
      (error) => {
        console.log( error )
        this.contactUsForm.reset();
      }
    )
  }

  ngOnInit(){
  }

}
