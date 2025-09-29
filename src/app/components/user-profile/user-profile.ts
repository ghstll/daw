import { Component } from '@angular/core';
import { db, user } from './db';
@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.css']
})
export class UserProfile {
  db = new db();
  user : {id : number,name : string,age : number,email : string} = {
    id : this.db.usersList[0].id,
    name: this.db.usersList[0].name,
    age: this.db.usersList[0].age,
    email: this.db.usersList[0].email
  };
  
  masde1 = false;
  users : user[]= [] //con usuarios : usuario[] le indicamos la estrucutra que seguira esta variable, 
                              //sera un arreglo de objetos de tipo usuario
  contador(){
    if(this.db.count() > 1){
      this.masde1 = true;
    };
  };
  show(){
    this.users = this.db.getAll()
  }

};