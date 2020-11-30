import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';
import  swal  from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes : Cliente[];

  constructor(private ClienteService: ClienteService ) { }

  ngOnInit() {

    this.ClienteService.listarClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }
      delete(cliente: Cliente): void {
      swal.fire({
        title: 'Está seguro?',
        //text: `Esta por eliminar a ${cliente.nombre} ${cliente.apellido}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar'
        }).then((result) => {
          if (result.value) {
          
            this.ClienteService.delete(cliente.id).subscribe(
              response => {
                
                this.clientes = this.clientes.filter(cli => cli !== cliente)
                swal.fire(
                  'Eliminado!',
                  `El cliente ${ cliente.nombre } eliminado con éxito`,
                  'success'
                )
              }
            )
        }
      })
    
          
    }
  }

