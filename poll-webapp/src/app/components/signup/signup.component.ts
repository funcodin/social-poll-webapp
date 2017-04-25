import {Component, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';
import { Response } from '@angular/http';


@Component({
  selector:'signup-page',
  templateUrl: './signup.component.html',
  styleUrls: ['signup.css']

})
export class SignupComponent{

user : any;
isError = false;

@ViewChild('createUserForm') createUserForm : NgForm;

  constructor( private signupService : SignupService ){

  }

  onSubmit(){
    this.isError = false;
    console.log(this.createUserForm);
    this.signupService.createUser( JSON.stringify(this.createUserForm.value) )
    .subscribe(
      (response: Response) => {
        console.log( response.json())
        this.user = response.json();
      },
      (error) => {
        console.log( error )
        this.isError = true;
        this.createUserForm.reset();
      }
    );
  }



}
