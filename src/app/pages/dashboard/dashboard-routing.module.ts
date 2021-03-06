import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunicacaoServiceComponent } from './components/comunicacao-service/comunicacao-service.component';
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
  },
  {
    path: 'comunicacao-service',
    component: ComunicacaoServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
