import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserCard } from '../user-card/user-card';
import { db, user } from '../user-profile/db';
@Component({
  standalone : true,
  selector: 'user-list',
  imports: [UserCard, CommonModule,ReactiveFormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  db = new db();
  users: user[] = this.db.getAll();
  userForm = new FormGroup({ 
    id : new FormControl(0),
    name : new FormControl("",[Validators.required]),
    age : new FormControl(0 , [Validators.required,Validators.max(100)]),
    email : new FormControl("",[Validators.required,Validators.email]) // Si alguno de las validaciones no se cumple ,usuarioForm.invalid sera true
  })
  deleteUser(id: number) {
    //Este metodo nos ayuda a utilizar el metodo delete() que se encuentra en la clase db del archivo db.ts
    this.db.delete(id);
    this.users = this.db.getAll(); //una vez que borramos el usuario usando su id, actualizamos el array de usuarios llamando nuevamente el metodo getAll()
  }
  updateUser(user : user){
    this.db.update(user)
  }
  loadFields(user : user){
    this.userForm.patchValue({
      id : user.id,
      name : user.name,
      email : user.email,
      age : user.age 
    })
  }
  createUser() {
    if(this.userForm.invalid){
      return
    }
    const newUser = this.userForm.value as user
    this.db.addUser(newUser);
    this.users = this.db.getAll();
    this.userForm.reset({ id: 0, name: '', age: 0, email: '' });
    
  }
  get nombre(){
    return this.userForm.get("nombre")
  }
}