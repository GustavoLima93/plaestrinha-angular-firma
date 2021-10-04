import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { CreateComponent } from './components/create/create.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudComponent,
    CreateComponent,
    ListagemComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CrudModule { }
