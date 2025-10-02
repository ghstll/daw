import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'practice-card',
  imports: [RouterLink],
  templateUrl: './practice-card.html',
  styleUrl: './practice-card.css'
})
export class PracticeCard {
  @Input() img_name! : string
  @Input() title! : string 
  @Input() link_route! :  string
}