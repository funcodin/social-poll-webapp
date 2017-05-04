import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class PollService {

  constructor( private http: Http ){

  }



  getFirstPage(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:8080/ws/question/latest/user/dc6150a7ba9f89a81cbd4022dacdc854/limit/15', {headers} );

  }

  getNextPage( userId: string, limit: number, lastIndex: number ){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    let httpUrl: string = "http://localhost:8080/ws/question/getPaginatedQuestion/user/"+userId+"/lastQuestionIndex/"+lastIndex+"/limit/"+limit;
    return this.http.get( httpUrl, {headers });
  }

  createPoll( userPoll : any ){
    console.log( userPoll );
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:8080/ws/userpoll/create', userPoll, {headers} );
  }



}
