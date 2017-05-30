import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector:'home',
  templateUrl:'./home.component.html',
  styleUrls:['home.css']
})
export class HomeComponent implements OnInit{

constructor(private router: Router, private notificationService : NotificationsService){

}

  ngOnInit(){
    //this.notificationService.success("Rohit","THE GREAT");
  }

  loadLogIn(){
    this.router.navigate(['/login']);
  }

  loadSignUp(){
    this.router.navigate(['/signup']);
  }

}
