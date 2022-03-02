import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {

  defaultFlag: string = 'european-union.svg'

  editing: boolean = false;

  @Input()
  displayH2!: boolean; // OJO //display

  @Input()
  detail!: Passenger; //!
 
  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter();

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter();

  @Output()
  select: EventEmitter<Passenger> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(value: string){
    this.detail.fullname = value;
  }

  toggleEdit(){
    if(this.editing){
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove(){
    this.remove.emit(this.detail);
  }

  onCheckIn(){
    this.detail.checkedIn = true;
    //this.detail.checkInDate = Date.now(); //no hace falta, mirar HTML "Check in date:"
    //this.edit.emit(this.detail); // ??
  }

  onSelect(){
    this.select.emit(this.detail);
  }

}
