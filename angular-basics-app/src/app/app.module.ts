import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; //Importing CommonModule also frees feature modules for use on any target platform, not just browsers. So let’s import it. 
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'passengers', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, //
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true}),
    PassengerDashboardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
