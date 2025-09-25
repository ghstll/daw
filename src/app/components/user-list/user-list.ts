import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserCard } from '../user-card/user-card';
import { db } from '../user-profile/db';
@Component({
  selector: 'user-list',
  imports: [UserCard,CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  db = new db()
  usuarios : {id : number,name : string,age : number,email : string}[] = this.db.getAll()
  deleteUser(id : number){ //Este metodo nos ayuda a utilizar el metodo delete() que se encuentra en la clase db del archivo db.ts
    this.db.delete(id)
    this.usuarios = this.db.getAll() //una vez que borramos el usuario usando su id, actualizamos el array de usuarios llamando nuevamente el metodo getAll()
    
  }
}
