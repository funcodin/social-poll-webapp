import {Component, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';
import { SigninService } from '../../services/signin/signin.service';
import { Response } from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['login.css']
})
export class LoginComponent{

  loginUser : any;
  isError =  false;

@ViewChild('loginForm') loginForm : NgForm;


  constructor( private signinService : SigninService, private router : Router ){

  }


onSubmit(){
  console.log(this.loginForm);
  this.signinService.loginUser( JSON.stringify( this.loginForm.value ))
  .subscribe(
    (response: Response ) => {
      this.loginUser = response.json();
      console.log( this.loginUser );
      this.router.navigate(['/']);

    },
    (error) => {
      console.log( error )
      this.isError = true;
      this.loginForm.reset();
    }
  )

}

}
