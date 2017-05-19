import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { BaseService } from '../shared/BaseService';

@Injectable()
export class PollService extends BaseService{

  constructor( private http: Http ){
    super();
  }

  createQuesiton(pollQuestion : any){
    let headers = this.getHeaders();
    return this.http.post(this.getBaseEndpoint()+'/question/', pollQuestion, {headers} );
  }

  getFirstPage( userId: string){
    let headers = this.getHeaders();
    return this.http.get(this.getBaseEndpoint()+'/question/latest/user/'+userId+'/limit/'+this.getLimit(), {headers} );
  }

  getNextPage( userId: string, limit: number, lastIndex: number ){
    let headers = this.getHeaders();
    let httpUrl: string = this.getBaseEndpoint()+"/question/getPaginatedQuestion/user/"+userId+"/lastQuestionIndex/"+lastIndex+"/limit/"+this.getLimit();
    return this.http.get( httpUrl, {headers });
  }

  createPoll( userPoll : any ){
    let headers = this.getHeaders();
    return this.http.post(this.getBaseEndpoint()+'/userpoll/create', userPoll, {headers} );
  }

  getFirstVotedPage(userId : string){
    let headers = this.getHeaders();
    return this.http.get(this.getBaseEndpoint()+'/question/latestVotedByUser/user/'+userId+'/limit/'+this.getLimit(), {headers} );
  }

  getNextVotedPage( userId: string, lastIndex: number ){
    let headers = this.getHeaders();
    let httpUrl: string = this.getBaseEndpoint()+"/question/getPaginatedQuestionVotedByUser/user/"+userId+"/lastQuestionIndex/"+lastIndex+"/limit/"+this.getLimit();
    return this.http.get( httpUrl, { headers });
  }

  getPollCreatedFirstPage( userId : string){
    let headers = this.getHeaders();
    return this.http.get(this.getBaseEndpoint()+'/question/latestByUser/user/'+userId+'/limit/9', {headers} );
  }


}
