import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditIcon } from '../icons/edit-icon/edit-icon';
import { TrashIcon } from '../icons/trash-icon/trash-icon';
import { db, usuario } from '../user-profile/db';

@Component({
  selector: 'tr[user-card]',
  imports: [EditIcon,TrashIcon],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  db = new db()
  @Input() usuario! : usuario //En este componente recibiremos un objeto user para poder cargar despues
                                                                          //sus datos en el user-card.html
  @Output() eliminar = new EventEmitter<number>() //De igual forma , este componente tendra una salida hacia su componente padre (user-list), el cual sera un number
                                                  // que representa el id del user que deseamos eliminar

                                                  //EventEmitter es un objeto que permite emitir valores hacia user-list (padre), en este caso un number (id)
                                                  //ese valor lo recibe user-list en un $event
  onDelete(){ //creamos el metodo onDelete que se activara en el evento click en los botones dentro de user-card,
    this.eliminar.emit(this.usuario.id) //
  }
}
