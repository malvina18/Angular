import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListarPropietariosComponent} from './componentes/listar-propietarios/listar-propietarios.component';
import {InsertarPropietariosComponent} from './componentes/insertar-propietarios/insertar-propietarios.component';
import {DetallePropietariosComponent} from './componentes/detalle-propietarios/detalle-propietarios.component';
import {ListarTipoMascotaComponent} from './componentes/listar-tipo-mascota/listar-tipo-mascota.component';
import {DetalleTipoMascotaComponent} from './componentes/detalle-tipo-mascota/detalle-tipo-mascota.component';
import {InsertarTipoMascotaComponent} from './componentes/insertar-tipo-mascota/insertar-tipo-mascota.component';

const routes: Routes = [
  {
    path: 'propietarios',
    component: ListarPropietariosComponent
  },
  {
    path: 'propietarios/:id',
    component: DetallePropietariosComponent
  },
  {
    path: 'propietarios-add/:id',
    component: InsertarPropietariosComponent
  },
  {
    path: 'tipoMascota',
    component: ListarTipoMascotaComponent
  },
  {
    path: 'tipoMascota/:id',
    component: DetalleTipoMascotaComponent
  },
  {
    path: 'tipoMascota-add/:id',
    component: InsertarTipoMascotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
