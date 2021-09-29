import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PaiComponent } from './components/pai/pai.component';
import { FilhoComponent } from './components/pai/components/filho/filho.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComunicacaoServiceComponent } from './components/comunicacao-service/comunicacao-service.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PaiComponent,
    FilhoComponent,
    ComunicacaoServiceComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
