import { Component } from '@angular/core';
import { PracticeCard } from '../../components/practice-card/practice-card';
interface practice {
  img_name : string
  title : string
  link_route : string
}
@Component({
  selector: 'home-page',
  imports: [PracticeCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  practices : practice[] = [
    {
      title : "CRUD",
      img_name : "assets/crud.png",
      link_route : "practices/crud"
    },
    {
      title : "Padre - Hijo",
      img_name : "assets/father_children.jpg",
      link_route : "practices/fatherchildrencomponent"
    }
  ]
}
