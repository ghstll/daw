export interface user  {
  id : number,
  name : string,
  age : number,
  email : string
}
export class db {
    idCount = 1
    usersList  : user[] = []
    count(){
        return this.usersList.length; 
    }
    getAll(){
        return this.usersList
    }
    delete(id : number){
      const index = this.usersList.findIndex(user => user.id === id) //Se usa un findIndex() para encontrar el indice del primer elemento que coincida con la condicion user.id === id
      if(index !== -1){                //En caso de que no se haya encontrado ningun elemento que coincida, el valor de index valdra -1, cosa que tenemos que confirmar en este If       
                                      //Si el valor no es -1 , usaremos el splice() para borrar el elemento                                           
        this.usersList.splice(index,1) 
      }
      console.log(this.usersList)
    }
    addUser(user : user){
      user.id = this.idCount //Hacemos referencia a el contador de ID (idCount) que esta en db.ts para llevar un incremento automatico del ID
      this.usersList.push(user)
      this.idCount++;
    }
    update(user : user){
      
    }
}