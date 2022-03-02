import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-passenger-actions',
  templateUrl: './passenger-actions.component.html',
  styleUrls: ['./passenger-actions.component.scss']
})
export class PassengerActionsComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {

  }

  //display: boolean;

  @Output()
  displayH1: EventEmitter<boolean> = new EventEmitter(); // OJO

  //@Output()
  //filter: EventEmitter<boolean> = new EventEmitter();

  boton1:boolean=false; //
  boton2:boolean=true; //
  boton3:boolean=false; // 

  filterPassengers(value: any, /**/boton:number) {
    //this.display = value;
    this.displayH1.emit(value); // OJO

    //this.filter.emit(this.display);
    //this.filter.emit(this.displayH1); // no se puede porque displayH1 es un EventEmitter en vez de un boolean normal
    
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
