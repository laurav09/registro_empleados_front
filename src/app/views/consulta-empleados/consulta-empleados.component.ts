import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  search() {
    this.empleadoService
      .getAll(this.currentPage, this.pageSize)
      .subscribe((data) => {
        // this.dataSource = new MatTableDataSource<Empleado>(data.content);
      });
  }
  crearNuevo(movieID: string) {
    this.router.navigate(['registro'], { queryParams: { movieID } });
  }
}
