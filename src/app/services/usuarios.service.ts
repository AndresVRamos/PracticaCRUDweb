import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'https://api-pw-ith.herokuapp.com/api/usuarios';

  constructor( private http: HttpClient ) { }

  public getUsuario() {
    return this.http.get( this.apiUrl + '/18330508');
  }

  public getUsuarioId( _id: any ) {
    return this.http.get( this.apiUrl + '/getId/' + _id);
  }

  public postUsuario( body: any ) {
    return this.http.post( this.apiUrl, body );
  }

  public deleteUsuario( _id: any ) {
    return this.http.delete( this.apiUrl + '/' + _id );
  }

  public putUsuario( _id: any, body: any ) {
    return this.http.put( this.apiUrl + '/' + _id, body );
  }
  
}

// GET: https://api-pw-ith.herokuapp.com/api/usuarios/no_control
// GET ID: https://api-pw-ith.herokuapp.com/api/usuarios/getId/_id
// POST: https://api-pw-ith.herokuapp.com/api/usuarios , body
// PUT: https://api-pw-ith.herokuapp.com/api/usuarios/_id , body
// DELETE: https://api-pw-ith.herokuapp.com/api/usuarios/{_id}