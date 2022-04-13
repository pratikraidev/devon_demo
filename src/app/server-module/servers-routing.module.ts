import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersHostComponent } from './servers-host.component';

const routes: Routes = [
  {
    path: '',
    component: ServersHostComponent
  },
  {
    path: '**',
    component: ServersHostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServeRoutingModule { }