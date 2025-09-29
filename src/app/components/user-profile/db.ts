export interface usuario  {
  id : number,
  nombre : string,
  edad : number,
  email : string
}
export class db {
    idCount = 1
    usersList  : usuario[] = [{id : 1,nombre : "Braulio Perez Compean" , edad : 20,email : "22690128@tecvalles.mx"}]
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
    agregar(user : usuario){
      user.id = this.idCount
      this.usersList.push(user)
      this.idCount++;
    }
}