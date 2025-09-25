import { Component } from '@angular/core';
import { db } from './db';
@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.css']
})
export class UserProfile {
  datos = new db();
  user : {id : number,name : string,age : number,email : string} = {
    id : this.datos.usersList[0].id,
    name: this.datos.usersList[0].name,
    age: this.datos.usersList[0].age,
    email: this.datos.usersList[0].email
  };
  masde1 = false;
  usuarios : {id : number,name : string,age : number,email : string}[] = [] //con usuarios : {}[] le indicamos la estrucutra que seguira esta variable, 
                                                                            //          sera un arreglo de objetos con los campos {id : number... etc}
  ngOnInit() : void{
    this.contador();
  }
  contador(){
    if(this.datos.count() > 1){
      this.masde1 = true;
    };
  };
  mostrar(){
    this.usuarios = this.datos.getAll()
  }
}; 