import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empleado, PageEmpleado } from '../models/empleado';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  baseURL = environment.backend;

  constructor(private http: HttpClient) {}

  getAll(page: number, size: number) {
    let params = new HttpParams().set('pageNo', page).set('pageSize', size);
    return this.http.get<PageEmpleado>(`${this.baseURL}/empleado`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      params: params,
    });
  }
  guardar(empleado: Empleado) {
    return this.http.post(`${this.baseURL}/empleado`, empleado);
  }
  eliminar(empleado: Empleado) {
    return this.http.delete(`${this.baseURL}/empleado`, { body: empleado });
  }
}
