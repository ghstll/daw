import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-hijo',
  imports: [],
  templateUrl: './comp-hijo.html',
  styleUrl: './comp-hijo.css'
})
export class CompHijo {
  @Input() data:any = {}
}
