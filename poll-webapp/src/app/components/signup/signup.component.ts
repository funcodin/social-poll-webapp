import {Component, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';


@Component({
  selector:'signup-page',
  templateUrl: './signup.component.html',
  styleUrls: ['signup.css']

})
export class SignupComponent{

@ViewChild('createUserForm') createUserForm : NgForm;

  onSubmit(){
    console.log(this.createUserForm);
  }


}
