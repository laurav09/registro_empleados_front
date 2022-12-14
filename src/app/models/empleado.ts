import { Pais } from './pais';

export class Empleado {
  id!: number;
  primerNombre!: string;
  segundoNombre!: string;
  primerApellido!: string;
  pais!: Pais;
  email!: string;
}
export interface PageEmpleado {
  content: Empleado[];
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
