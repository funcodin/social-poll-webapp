import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class SignupService {

  constructor( private http: Http ){

  }

  createUser( user: any ){
    console.log( user );
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:8080/ws/user', user, {headers} );
  }

}
