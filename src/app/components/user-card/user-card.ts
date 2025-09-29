import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditIcon } from '../icons/edit-icon/edit-icon';
import { TrashIcon } from '../icons/trash-icon/trash-icon';
import { db, user } from '../user-profile/db';

@Component({
  selector: 'tr[user-card]',
  imports: [EditIcon,TrashIcon],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  db = new db()
  @Input() user! : user //En este componente recibiremos un objeto user para poder cargar despues
                                                                          //sus datos en el user-card.html
  @Output() delete = new EventEmitter<number>() //De igual forma , este componente tendra una salida hacia su componente padre (user-list), el cual sera un number
                                                  // que representa el id del user que deseamos eliminar

                                                  //EventEmitter es un objeto que permite emitir valores hacia user-list (padre), en este caso un number (id)
                                                  //ese valor lo recibe user-list en un $event
  @Output() editar = new EventEmitter<number>()
  onDelete(){ //creamos el metodo onDelete que se activara en el evento click en los botones dentro de user-card,
    this.delete.emit(this.user.id) //
  }
  onUpdate(){
    this.editar.emit(this.user.id)
  }
}
