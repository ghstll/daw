import { Component } from '@angular/core';
import { CompHijo } from '../comp-hijo/comp-hijo';

@Component({
  selector: 'app-comp-padre',
  imports: [CompHijo],
  templateUrl: './comp-padre.html',
  styleUrl: './comp-padre.css'
})
export class CompPadre {
  user = {
    nombre : "hugo",
    apellido : "larraga"
  }
}
