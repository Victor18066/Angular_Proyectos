import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent implements OnInit {

  @Input() //
  items: Passenger[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  checkedInCount() /*:number*/ {
    if(!this.items) return;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }

}
