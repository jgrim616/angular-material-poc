import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashComponent } from './main-dash/main-dash.component';
import { MainTableComponent } from './main-table/main-table.component';
import { CustomerDashComponent } from './customer-dash/customer-dash.component';

const routes: Routes = [
  { path: 'dashboard', component: MainDashComponent },
  {
    path: 'claims',
    component: MainTableComponent
  },
  {
    path: 'customers',
    component: CustomerDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
