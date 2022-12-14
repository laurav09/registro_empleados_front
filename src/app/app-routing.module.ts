import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/consulta-empleados/consulta-empleados.module').then(
        (m) => m.ConsultaEmpleadosModule
      ),
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./views/registro/registro.module').then((m) => m.RegistroModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
