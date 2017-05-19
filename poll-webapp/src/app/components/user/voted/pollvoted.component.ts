import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../../../services/poll/poll.service';
import { Response } from '@angular/http';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'angular2-cookie/core';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector : 'poll-voted',
  templateUrl: './pollvoted.component.html',
  styleUrls: ['pollvoted.component.scss']
})
export class PollVoted implements OnInit {

  votedPolls: any =[];
  isLastPage: boolean = false;
  userId: string;
  lastPageIndex: number;
  pollUser : any;

  constructor( private pollService: PollService, private cookieService : CookieService, private router : Router, private notificationService : NotificationsService ){

  }


  ngOnInit(){
    this.pollUser = this.cookieService.getObject('pollUser');
    if( this.pollUser === undefined ){
      this.router.navigate(['/login']);
    }
     this.getFirstVotedPage();

  }

  calculatePercentage( voteCount:number, totalVotes:number): number{
    if(voteCount == 0)
    return 0;
    return (voteCount/totalVotes)*100 >> 0;
  }

  getFirstVotedPage(){
    this.pollService.getFirstVotedPage( this.pollUser.userId )
    .subscribe(
      (response : Response ) => {
        console.log( response );
        this.votedPolls = response.json();
        this.isLastPage = this.votedPolls.isLastPage;
        this.lastPageIndex = this.votedPolls.lastQuestionIndex;

        if( this.isLastPage && this.votedPolls.questions.length == 0){
          this.notificationService.success("Come on!!!","Lets give more opinions!!!");
        }

    },
      (error) => {
        console.log( error )
      }
    )
  }


}
