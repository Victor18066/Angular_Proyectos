import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http' // NO VA
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-viewer/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-dashboard/passenger-viewer/passenger-viewer.component';

// Components
import { PassengerActionsComponent } from './components/passenger-actions/passenger-actions.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
//import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';

// Services
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

const routes: Routes = [
  {
    path: 'passengers',
    children: [
      { path: '', component: PassengerDashboardComponent},
      { path: ':id', component: PassengerViewerComponent}
    ]
  }
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,

    PassengerActionsComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    //PassengerInfoComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule, // NO VA
    RouterModule.forChild(routes) //
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerViewerComponent,

    //PassengerActionsComponent, //exporto tambíen para que passenger-dashboard.module.ts vea estos componentes
    //PassengerCountComponent,
    //PassengerDetailComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule { }