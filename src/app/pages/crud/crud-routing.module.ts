import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { UpdateComponent } from './components/update/update.component';
import { CrudComponent } from './crud.component';

const routes: Routes = [
  {
    path: '',
    component: CrudComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'list',
    component: ListagemComponent,
  },
  {
    path: 'update',
    component: UpdateComponent,
  },
  {
    path: 'delete',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
