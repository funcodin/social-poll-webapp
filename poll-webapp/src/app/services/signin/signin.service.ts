import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { BaseService } from '../shared/BaseService';

@Injectable()
export class SigninService extends BaseService{

constructor( private http : Http ){
 super();
}

loginUser( loginUser: any ) {
  console.log( loginUser );
  let headers = this.getHeaders();
  console.log( this.getBaseEndpoint());
  return this.http.post(this.getBaseEndpoint()+'/user/login', loginUser, {headers} );
}

}
