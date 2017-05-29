import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { BaseService } from '../shared/BaseService';


@Injectable()
export class UserProfileService extends BaseService{

  constructor( private http: Http){
    super();
  }


  getUserProfile( userName: string ){
    let headers = this.getHeaders();
    return this.http.get( this.getBaseEndpoint()+'/user/userName/'+userName, {headers});
  }


}
