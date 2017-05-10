import { Component } from '@angular/core';
import { CONFIG} from './config';
import {NotificationsService, SimpleNotificationsComponent} from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CONFIG: any = CONFIG;

  constructor( private notificationService: NotificationsService){}
  
}
