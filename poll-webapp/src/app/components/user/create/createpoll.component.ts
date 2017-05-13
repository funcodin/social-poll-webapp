import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'create-poll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.scss']
})
export class CreatePollComponent implements OnInit{

  optionTypes : string[] = ['BINARY','MULTIPLE','STAR', 'NUMBER'];

  optionValues : string[] =[];

  ngOnInit(){

  }

  optionSelected( option : string ){
    console.log( option );
    this.optionValues.push('test');
    console.log( this.optionValues);
  }

  onSubmit(){
    console.log( 'why I am getting called');
  }
}
