import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../../../services/poll/poll.service';
import { Response } from '@angular/http';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'angular2-cookie/core';


@Component({
  selector: 'poll-created',
  templateUrl: './pollcreated.component.html',
  styleUrls: ['pollcreated.component.scss']
})
export class PollCreatedComponent implements OnInit{

  votedPolls: any =[];
  isLastPage: boolean = false;
  userId: string;
  lastPageIndex: number;
  pollUser : any;

  constructor( private pollService: PollService, private cookieService : CookieService, private router : Router){

  }

  ngOnInit(){
    this.getPollCreatedFirstPage();
    this.pollUser = this.cookieService.getObject('pollUser');
    if( this.pollUser === undefined ){
      this.router.navigate(['/login']);
    }
  }

  getPollCreatedFirstPage(){
    this.pollService.getPollCreatedFirstPage()
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

  calculatePercentage( voteCount:number, totalVotes:number): number{
    return (voteCount/totalVotes)*100
  }

}
