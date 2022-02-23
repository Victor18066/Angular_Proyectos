import { Component } from '@angular/core';
import { Passenger } from './passenger&child_interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], //
  
  //template: ``
  
})
export class AppComponent {
  title = 'angular-basics-app';

  display:boolean = true;//
  defaultFlag:string='european-union.svg'

  boton1:boolean=false; //
  boton2:boolean=true; //
  boton3:boolean=false; //
  
  passengers: Passenger[] = [{
    id:1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1510742000000,
    children: [{name: 'Johnny', age: 4}],
    nationality: null
  }, {
    id:2,
    fullname: 'Rose',
    checkedIn: true,
    checkInDate: 1510742000001,
    children: null,
    nationality: 'france.svg'
  }, {
    id:3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1510742000002,
    children: [{name: 'Ted', age: 3}, {name: 'Emma', age: 7}],
    nationality: 'united-states-of-america.svg'
  }, {
    id:4,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1510742000003,
    children: [{name: 'Loise', age: 5}],
    nationality: 'united-kingdom.svg'
  }, {
    id:5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: 1510742000004,
    children: null,
    nationality: null
  }];

  filterPassengers(value: any, /**/boton:number) {
    this.display = value;

    if(boton==1){ //
      this.boton1=true;
      this.boton2=false;
      this.boton3=false;
    }
    if(boton==2){ //
      this.boton1=false;
      this.boton2=true;
      this.boton3=false;
    }
    if(boton==3){ //
      this.boton1=false;
      this.boton2=false;
      this.boton3=true;
    }
  }

}
