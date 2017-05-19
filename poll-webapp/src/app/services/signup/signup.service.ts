import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { BaseService } from '../shared/BaseService';

@Injectable()
export class SignupService extends BaseService{

  constructor( private http: Http ){
    super();
  }

  createUser( user: any ){
    console.log( user );
    let headers = this.getHeaders();
    return this.http.post(this.getBaseEndpoint()+'/user', user, {headers} );
  }

}
