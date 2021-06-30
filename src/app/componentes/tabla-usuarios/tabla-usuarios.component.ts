import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css'],
})
export class TablaUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private service: UsuariosService, private router: Router) {
    this.service.getUsuario().subscribe((res) => {
      this.usuarios = res['usuarios'];
    });
  }

  ngOnInit(): void {

  }

  actualizar( item: any ) {
    console.log('actualizando');
    console.log(this.usuarios[item]);
    
  }

  eliminar( item:any ) {
    console.log('eliminando')
    const _id = this.usuarios[item]._id;

    console.log(_id);
    if ( confirm('¿Seguro que quieres eliminar este registro?')) {
      console.log("Acepto");
      this.service.deleteUsuario(_id).subscribe( res => {
      console.log(res);
      this.router.navigate(['/tablaUsuarios']);
    });
    }
    
  }
}
