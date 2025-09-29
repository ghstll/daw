import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserCard } from '../user-card/user-card';
import { db, usuario } from '../user-profile/db';
@Component({
  standalone : true,
  selector: 'user-list',
  imports: [UserCard, CommonModule,ReactiveFormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  db = new db();
  usuarios: usuario[] = this.db.getAll();
  usuarioForm = new FormGroup({
    id : new FormControl(0),
    nombre : new FormControl("",[Validators.required]),
    edad : new FormControl(0 , [Validators.max(100)]),
    email : new FormControl("")
  })
  nuevoUsuario: usuario = {
    id: 0,
    nombre: '',
    edad: 0,
    email: '',
  };
  deleteUser(id: number) {
    //Este metodo nos ayuda a utilizar el metodo delete() que se encuentra en la clase db del archivo db.ts
    this.db.delete(id);
    this.usuarios = this.db.getAll(); //una vez que borramos el usuario usando su id, actualizamos el array de usuarios llamando nuevamente el metodo getAll()
  }
  createUser() {
    if(this.usuarioForm.invalid){
      return
    }
    const nuevoUsuario = this.usuarioForm.value as usuario
    this.db.agregar(nuevoUsuario);
    this.usuarios = this.db.getAll();
    this.usuarioForm.reset({ id: 0, nombre: '', edad: 0, email: '' });
    
  }
  get nombre(){
    return this.usuarioForm.get("nombre")
  }
}