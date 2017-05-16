import {Component,ViewChild, OnInit} from '@angular/core';
import { NgForm} from '@angular/forms';
import { PollService } from '../../../services/poll/poll.service';
import {CookieService} from 'angular2-cookie/core';
import {Router} from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'create-poll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.scss']
})
export class CreatePollComponent implements OnInit{

  pollUser : any;
  optionTypes : string[] = ['BINARY','MULTIPLE','STAR', 'NUMBER'];
  optionValues : string[] =[];

  @ViewChild('createPollForm') createPollForm : NgForm;


  constructor( private pollService: PollService, private cookieService : CookieService, private router : Router){

  }

  ngOnInit(){

    this.pollUser = this.cookieService.getObject('pollUser');
    if( this.pollUser === undefined ){
      this.router.navigate(['/login']);
    }else{
      this.optionValues.push('');
      this.optionValues.push('');
    }

  }


  addOption(){
    console.log("item added")
    this.optionValues.push('');
  }


  removeOption(){
      this.optionValues.pop();
  }

  optionSelected( option : string ){
    this.optionValues.push(option);
  }

  onSubmit(){
    let optionsArray = [];

    for( var i=0; i < this.optionValues.length ; i++){
     let options = {
        optionValue : this.createPollForm.value['option_'+i]
      }
      optionsArray.push(options);
    }
    let question = {
      pollQuestion : this.createPollForm.value.question,
      optionType : 'MULTIPLE',
      userId: this.pollUser.userId,
      options : optionsArray
    }
    console.log( JSON.stringify(question));
    this.pollService.createQuesiton( question )
    .subscribe(
      (response: Response ) => {
        console.log( response );
        this.router.navigate(['/asked']);
      },
      (error) => {
        console.log( error )
      }
    )

  }
}
