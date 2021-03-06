import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { PollService } from '../../services/poll/poll.service';
import { UserPoll } from '../../types/userpoll';
import {CookieService} from 'angular2-cookie/core';
import {Router} from '@angular/router';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'poll-list',
  templateUrl: './poll.component.html',
  styleUrls: ['poll.css']

})
export class PollComponent implements OnInit {

  pollQuestions: any =[];
  isFirstPage: boolean = true;
  isLastPage: boolean = false;
  userId: string;
  lastPageIndex: number;
  pollUser : any;

    constructor( private pollService: PollService, private cookieService : CookieService, private router : Router, private notificationService : NotificationsService){
    }

    ngOnInit(){

      this.pollUser = this.cookieService.getObject('pollUser');
      if( this.pollUser === undefined ){
        this.router.navigate(['/login']);
      }else{
        this.getFirstPage();
      }
    }

    calculatePercentage( voteCount:number, totalVotes:number): number{
      if(voteCount == 0)
      return 0;
      return (voteCount/totalVotes)*100 >> 0;
    }

vote( optionId : string, questionId : string ){
  let userPoll = new UserPoll( this.pollUser.userId, questionId, optionId);
  this.pollService.createPoll(JSON.stringify( userPoll ) )
  .subscribe(
    (response: Response) => {
      let votedQuestion = response.json();
       console.log( votedQuestion);
      for( var i =0; i< this.pollQuestions.questions.length; i ++){

        if( this.pollQuestions.questions[i].questionId === votedQuestion.questionId){
          this.pollQuestions.questions[i] = votedQuestion;
        }
      }

    },
    (error) => {
      console.log( error )
    }
  );
}


getFirstPage(){
  this.pollService.getFirstPage(this.pollUser.userId)
  .subscribe(
    (response : Response ) => {
      console.log( response );
      this.pollQuestions = response.json();
      this.isLastPage = this.pollQuestions.isLastPage;
      this.lastPageIndex = this.pollQuestions.lastQuestionIndex;
      this.isFirstPage = true;
      if( this.isLastPage && this.pollQuestions.questions.length == 0){
        this.notificationService.success("YAY!!!","You are all caught up");
      }

  },
    (error) => {
      console.log( error )
    }
  )
}


getNextPage() {

  this.pollService.getNextPage( this.pollUser.userId, this.lastPageIndex )
  .subscribe(
    (response : Response ) => {
      console.log( response );
      this.pollQuestions = response.json();
      this.isLastPage = this.pollQuestions.isLastPage;
      this.lastPageIndex = this.pollQuestions.lastQuestionIndex;
      if( this.isLastPage ){
      this.isFirstPage = false;
      }

  },
    (error) => {
      console.log( error )
    }
  )

}

}
