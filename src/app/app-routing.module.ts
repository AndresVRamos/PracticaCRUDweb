import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { TablaUsuariosComponent } from './componentes/tabla-usuarios/tabla-usuarios.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './componentes/actualizar-usuario/actualizar-usuario.component';

const routes: Routes = [
  {path:'formulario', component: FormularioComponent},
  {path:'tablaUsuarios', component: TablaUsuariosComponent},
  {path:'crearUsuario', component: CrearUsuarioComponent},
  {path:'actualizarUsuario/:id', component: ActualizarUsuarioComponent},
  {path: '**', pathMatch: 'full', redirectTo:'formulario'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
