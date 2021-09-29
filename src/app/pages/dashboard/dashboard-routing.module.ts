import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiComponent } from './components/pai/pai.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'comunicacao-familia',
    component: PaiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
