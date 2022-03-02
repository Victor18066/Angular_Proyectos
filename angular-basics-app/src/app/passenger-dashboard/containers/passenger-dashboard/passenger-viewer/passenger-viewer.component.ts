import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from 'src/app/passenger-dashboard/passenger-dashboard.service';

import { Passenger } from 'src/app/passenger-dashboard/models/passenger.interface';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.css']
})
export class PassengerViewerComponent implements OnInit {

  passenger!: Passenger;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService) { } //

  ngOnInit(): void {
    // this.passenger = this.passengerService.getPassenger(1); //
  }

  onUpdatePassenger(passenger: Passenger){
    console.log(passenger);
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }

}
