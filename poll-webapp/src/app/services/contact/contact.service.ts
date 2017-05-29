import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { BaseService } from '../shared/BaseService';


@Injectable()
export class ContactUsService extends BaseService{

  constructor( private http: Http ){
    super();
  }


  sendContactUsEmail( contactUs : any ) {
    let headers = this.getHeaders();
    console.log( contactUs );
    return this.http.post( this.getBaseEndpoint()+'/contactus', contactUs, {headers});
  }

}
