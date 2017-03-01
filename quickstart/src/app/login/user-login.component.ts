import { Component } from '@angular/core';
import { SecureUser } from './secure-user';


@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: './html/user-registration-form.html',
  styleUrls: ['./css/styles.css']
})
export class UserRegistationComponent {
secureUser: SecureUser;

userLogin(form : any){
  console.log("user creates", form);
  this.secureUser = new SecureUser(form.username, form.password);

}

}
