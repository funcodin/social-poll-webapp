import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class SigninService{

constructor( private http : Http ){

}

loginUser( loginUser: any ) {

  console.log( loginUser );
  let headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');

  return this.http.post('http://localhost:8080/ws/user/login', loginUser, {headers} );
}

}
