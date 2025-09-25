
export class db {
   usersList  : {id : number,name : string,age : number , email : string}[]= [
      {
        id : 1,
        name : "Maria Dominguez",
        age : 20,
        email : "221249812@tecvalles.mx"
      },
      {
        id : 2,
        name : "Ignacio Perez",
        age : 20,
        email : "1823717@tecvalles.mx"
      },
      {
        id : 3,
        name : "Rodrigo Sanchez",
        age : 22,
        email : "1237712@tecvalles.mx"
      },
    ]
    count(){
        return this.usersList.length;
    }
    getAll(){
        return this.usersList
    }
    delete(id : number){ //Metodo que eliminara un usuario por su id, como parametro recibe un number (id)
      const index = this.usersList.findIndex(user => user.id === id) //El metodo findIndex nos regresara el indice del primer elemento en un Array
                                                                      //que cumpla con la condicion establecida, en este caso que user.id === id
      if(index !== -1){
        this.usersList.splice(index,1) // SI nuestra variable index NO es -1,con el metodo splice() removeremos ese usuario de nuestro Array
      }
      console.log(this.usersList)
    }
    agregar(user : {id : number,name : string,age : number , email : string}){
      
    }
}