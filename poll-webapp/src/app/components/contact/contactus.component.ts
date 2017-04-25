import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector:'contact-us',
  templateUrl: './contactus.component.html',
  styleUrls:['contactus.css']
})
export class ContactUsComponent {

@ViewChild('contactUsForm') contactUsForm : NgForm;

onSubmit(){
  console.log( this.contactUsForm);
}

}
