import { Injectable } from '@angular/core';
import { Passenger } from './models/passenger.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http' 
import { Observable } from 'rxjs'; 
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

const PASSENGER_API : string = `${environment.backend}/passengers`; // `

@Injectable()
export class PassengerDashboardService {

  constructor(private http: HttpClient) { }

  passengerID!: Passenger[];

  /*
  getPassengers(): Passenger[] { //this.passengers =
      return [{ 
      id:1,
      fullname: "Stephen",
      checkedIn: true,
      checkInDate: 1510742000000,
      children: [{name: "Johnny", age: 4}],
      nationality: null
    }, {
      id:2,
      fullname: "Rose",
      checkedIn: true,
      checkInDate: 1510742000001,
      children: null,
      nationality: "france.svg"
    }, {
      id:3,
      fullname: "James",
      checkedIn: true,
      checkInDate: 1510742000002,
      children: [{name: "Ted", age: 3}, {name: "Emma", age: 7}],
      nationality: "united-states-of-america.svg"
    }, {
      id:4,
      fullname: "Stephen",
      checkedIn: true,
      checkInDate: 1510742000003,
      children: [{name: "Loise", age: 5}],
      nationality: "united-kingdom.svg"
    }, {
      id:5,
      fullname: "Tina",
      checkedIn: false,
      checkInDate: 1510742000004,
      children: null,
      nationality: null
    }];
  } 

  getPassenger(id: number){ 
    this.passengerID = this.getPassengers();
    return this.passengerID[id];
  } */

   getPassengersHttp(): Observable<Passenger[]> { // ??

    let headers = new HttpHeaders({ //new Headers
      'Content-type': 'application/json'
    });

    let options = { // new RequestOptions({...})
      headers: headers
    };

    return this.http.get(PASSENGER_API).pipe(map((response: any) => response));
  } 
  
  /*
  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());
  } */

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger).pipe(
       map((response: any) => response));
      //.catch((error: any) => Observable.throw(error.json));
}

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`).pipe(
      map((response: any) => response));
      //.catch((error: any) => Observable.throw(error.json));
}


}


