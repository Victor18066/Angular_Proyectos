import { Component, Input, OnInit, Output } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Baggage } from '../../models/baggage.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {

  @Input()
  detail!: Passenger; //

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage',
  }, {
    key: 'hand-only',
    value: 'Hand baggage',
  }, {
  key: 'hold-only',
    value: 'Hold baggage',
  }, {  
    key: 'hand-hold',
    value: 'Hand and hold baggage'
  }];

  toggleCheckIn(checkedIn: boolean){
    if(checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean | null ){ // HTML -> form.valid error - Argument of type 'boolean | null' is not assignable to parameter of type 'boolean'. Type 'null' is not assignable to type 'boolean'.
    if(isValid) {
      this.update.emit(passenger);
    }
  }

  constructor() { } 

  ngOnInit(): void {
    
  }

}
