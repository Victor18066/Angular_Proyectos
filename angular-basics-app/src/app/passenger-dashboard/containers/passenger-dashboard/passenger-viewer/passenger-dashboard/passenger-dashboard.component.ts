import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../../../../models/passenger.interface';

import { PassengerDashboardService } from '../../../../passenger-dashboard.service';

import { Router } from '@angular/router';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: 'passenger-dashboard.component.html',
  styleUrls: ['passenger-dashboard.component.scss'], 
  
})
export class PassengerDashboardComponent {
  title = 'angular-basics-app';

  defaultFlag:string='european-union.svg'

  displayP: boolean = true; // OJO

  passengers: Passenger[] = []; //inicializar

  selectedPassenger!: Passenger;

  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService) {}

  ngOnInit(){
    //this.passengers = this.passengerService.getPassengers(); 
    this.passengerService.getPassengersHttp().subscribe((data:Passenger[]) => this.passengers = data);
  }

  /*
  handleAction(event: any){
      this.displayP = event; // OJO
    } 
  */

  handleAction(displayP: boolean){ //handleFilter
    this.displayP = displayP; //displayP -> display
  }

  handleEdit(event: Passenger) { 
    this.passengerService
    .updatePassenger(event)
    .subscribe((data: Passenger) => { //
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if (passenger.id === event.id) { // In javascript, the operator '==' only check equality and '===' check type and equality
            passenger = Object.assign({}, passenger, event);
        }
        return passenger;
      });
    });
     
  }

  handleRemove(event: Passenger) {
    this.passengerService
    .removePassenger(event)
    .subscribe((data: Passenger) => { //
      this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
    });
  }

  handleSelect(passengerS: Passenger){
    // this.selectedPassenger = passengerS; // NO VA //passenger-info eliminado
    this.router.navigate(['/passengers', passengerS.id]) // passengerS
  }

}
