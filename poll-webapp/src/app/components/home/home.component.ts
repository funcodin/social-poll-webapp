import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:'home',
  templateUrl:'./home.component.html',
  styleUrls:['home.css']
})
export class HomeComponent{

constructor(private router: Router){

}

  loadLogIn(){
    this.router.navigate(['/login']);
  }

  loadSignUp(){
    this.router.navigate(['/signup']);
  }

}
