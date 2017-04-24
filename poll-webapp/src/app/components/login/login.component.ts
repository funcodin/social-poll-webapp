import {Component, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['login.css']
})
export class LoginComponent{

@ViewChild('loginForm') loginForm : NgForm;

onSubmit(){
  console.log(this.loginForm);
}

}
