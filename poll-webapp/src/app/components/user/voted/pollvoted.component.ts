import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../../../services/poll/poll.service';
import { Response } from '@angular/http';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';

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

  constructor( private pollService: PollService){

  }


  ngOnInit(){
    this.getFirstVotedPage();
  }


  calculatePercentage( voteCount:number, totalVotes:number): number{
    return (voteCount/totalVotes)*100
  }

  getFirstVotedPage(){
    this.pollService.getFirstVotedPage()
    .subscribe(
      (response : Response ) => {
        console.log( response );
        this.votedPolls = response.json();
        this.isLastPage = this.votedPolls.isLastPage;
        this.lastPageIndex = this.votedPolls.lastQuestionIndex;
    },
      (error) => {
        console.log( error )
      }
    )
  }


}
