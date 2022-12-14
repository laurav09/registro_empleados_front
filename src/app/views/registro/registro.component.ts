import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Empleado } from 'src/app/models/empleado';
import { Pais } from 'src/app/models/pais';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass'],
})
export class RegistroComponent implements OnInit {
  form!: FormGroup;
  empleado: Empleado = new Empleado();
  paises: Pais[] = [];

  constructor(
    private empleadoService: EmpleadoService,
    private paisServie: PaisService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      segundoNombre: new FormControl(''),
      apellido: new FormControl('', Validators.required),
      pais: new FormControl('', Validators.required),
    });
    this.paisServie.getAll().subscribe((list) => {
      this.paises = list;
    });
  }
  guardar() {
    let email = '';
    this.empleado.primerNombre = this.form.get('nombre')!.value;
    this.empleado.segundoNombre = this.form.get('segundoNombre')!.value;
    this.empleado.primerApellido = this.form.get('apellido')!.value;
    this.empleado.pais = this.form.get('pais')!.value;
    email =
      this.empleado.primerNombre.replace(/\s/g, '') +
      this.empleado.primerApellido.replace(/\s/g, '');
    email += this.empleado.pais.nombre.includes('Colombia')
      ? '@cidenet.com.co'
      : '@cidenet.com.us';
    this.empleado.email = email;
    this.empleadoService.guardar(this.empleado).subscribe(() => {
      this._snackBar.open('Se ha guardado.', '', {
        duration: 2500,
        panelClass: ['info-snack'],
      });
    });
  }

  // getErrorMessage() {
  //   if (this.form.get('nombre').hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
}
