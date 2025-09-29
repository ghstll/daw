import { Component } from '@angular/core';
import { db } from './db';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Importa FormsModule

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.css'],
  imports: [CommonModule, FormsModule] // <-- Agrega FormsModule aquí
})
export class UserProfileComponent {
  datos = new db();
  user = { id: 0, name: '', age: '', email: '' };
  masde1 = false;
  usuarios: { id: number; name: string; age: string; email: string }[] = [];
  selectedId: number | null = null;
  nuevoUsuario = { id: 0, name: '', age: '', email: '' };
  editarUsuario = { id: 0, name: '', age: '', email: '' };
  usuarioBuscado: any = null;
  crudSeleccionado: string = 'crear';
  usuarioBorrarId: number | null = null;

  ngOnInit(): void {
    this.contador();
    this.user = { ...this.datos.usersList[0] };
  }

  onCrudChange() {
    if (this.crudSeleccionado === 'actualizar' || this.crudSeleccionado === 'borrar') {
      this.usuarios = this.datos.getAll();
    }
    if (this.crudSeleccionado !== 'actualizar') {
      this.editarUsuario = { id: 0, name: '', age: '', email: '' };
    }
    if (this.crudSeleccionado !== 'borrar') {
      this.usuarioBorrarId = null;
    }
  }

  contador() {
    this.masde1 = this.datos.count() > 0;
  }

  mostrar() {
    this.usuarios = this.datos.getAll();
  }

  buscarPorId() {
    if (this.selectedId) {
      this.usuarioBuscado = this.datos.getById(this.selectedId);
    }
  }

  crearUsuario() {
    if (this.nuevoUsuario.name && this.nuevoUsuario.age && this.nuevoUsuario.email) {
      this.datos.add({
        name: this.nuevoUsuario.name,
        age: this.nuevoUsuario.age,
        email: this.nuevoUsuario.email
      });
      this.mostrar();
      this.contador();
    }
  }

  seleccionarParaEditar(usuario: any) {
    this.editarUsuario = { ...usuario };
  }

  actualizarUsuario() {
    this.datos.update(this.editarUsuario.id, {
      name: this.editarUsuario.name,
      age: this.editarUsuario.age,
      email: this.editarUsuario.email
    });
    this.editarUsuario = { id: 0, name: '', age: '', email: '' };
    this.mostrar();
  }

  borrarUsuario(id: number) {
    this.datos.delete(id);
    this.mostrar();
    this.contador();
  }
}