import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { PollService } from '../../services/poll/poll.service';
import { UserPoll } from '../../types/userpoll';

@Component({
  selector: 'poll-list',
  templateUrl: './poll.component.html',
  styleUrls: ['poll.css']

})
export class PollComponent implements OnInit {

  pollQuestions: any =[];
  isLastPage: boolean = false;
  userId: string;
  lastPageIndex: number;

    constructor( private pollService: PollService){

    }

    ngOnInit(){
      this.getFirstPage();
    }

vote( optionId : string, questionId : string ){
  console.log('Clicked ' + optionId+ 'Question id ' + questionId );
  let userPoll = new UserPoll( '7e2fb5e5-86ae-4259-a9dc-d8350a876733', questionId, optionId);

  this.pollService.createPoll(JSON.stringify( userPoll ) )
  .subscribe(
    (response: Response) => {
      let votedQuestion = response.json();

      console.log(votedQuestion);
      for( var i =0; i< this.pollQuestions.questions.length; i ++){
      //for( let question of this.pollQuestions.questions ){
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

onScroll(event : Event ){
  //console.log( event);

}

getFirstPage(){
  this.pollService.getFirstPage()
  .subscribe(
    (response : Response ) => {
      console.log( response );
      this.pollQuestions = response.json();
      this.isLastPage = this.pollQuestions.isLastPage;
      this.lastPageIndex = this.pollQuestions.lastQuestionIndex;
  },
    (error) => {
      console.log( error )
    }
  )
}


getNextPage() {
  this.pollService.getNextPage('dd1f07a9-e9b9-4882-880a-bdf9f1361ea5', 5, this.lastPageIndex )
  .subscribe(
    (response : Response ) => {
      console.log( response );
      this.pollQuestions = response.json();
      this.isLastPage = this.pollQuestions.isLastPage;
      this.lastPageIndex = this.pollQuestions.lastQuestionIndex;
  },
    (error) => {
      console.log( error )
    }
  )


}




}
