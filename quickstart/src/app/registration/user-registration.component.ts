import { Component } from '@angular/core';
import { NewUser } from './new-user';


@Component({
  moduleId: module.id,
  selector: 'registration-form',
  templateUrl: './html/user-registration-form.html',
  styleUrls: ['./css/styles.css']
})
export class UserRegistationComponent {
newUser: NewUser;

createUser(form : any){
  console.log("user creates", form);
  this.newUser = new NewUser(form.firstName, form.lastName, form.email);

}

}
