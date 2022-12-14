import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-consulta-empleados',
  templateUrl: './consulta-empleados.component.html',
  styleUrls: ['./consulta-empleados.component.sass'],
})
export class ConsultaEmpleadosComponent implements OnInit {
  dataSource: any;
  searchText: string = '';
  displayedColumns: string[] = ['nombre', 'email', 'pais'];
  currentPage: number = 0;
  pageSize: number = 10;
  totalPages: number = 0;
  loading: boolean = true;
  empleadoSeleccionado!: any;

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }
  obtenerEmpleados() {
    this.empleadoService
      .getAll(this.currentPage, this.pageSize)
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource<Empleado>(data.content);
        this.totalPages = data.totalPages;
        this.loading = false;
      });
  }
  crearNuevo() {
    this.router.navigate(['registro']);
  }
  seleccionar(empleado: Empleado) {
    this.empleadoSeleccionado =
      this.empleadoSeleccionado == empleado ? null : empleado;
  }
  eliminar() {
    this.loading = true;
    this.empleadoService.eliminar(this.empleadoSeleccionado).subscribe(() => {
      this._snackBar.open('Se ha eliminado.', '', {
        duration: 2500,
        panelClass: ['info-snack'],
      });
      this.obtenerEmpleados();
    });
  }
  prevPage() {
    this.currentPage--;
    this.obtenerEmpleados();
  }
  nextPage() {
    this.currentPage++;
    this.obtenerEmpleados();
  }
}
