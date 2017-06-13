import { Headers } from '@angular/http';

export class BaseService {

 public baseEndpoint : string = 'http://pollbag:8080/ws';
 public limit : number = 9;

  getBaseEndpoint(): string {
    return this.baseEndpoint;
  }

  getHeaders() : Headers{
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return headers;
  }

  getLimit() : number {
    return this.limit;
  }

}
