import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaEmpleadosComponent } from './consulta-empleados.component';

const routes: Routes = [{ path: '', component: ConsultaEmpleadosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaEmpleadosRoutingModule {}
