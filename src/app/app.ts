import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComp } from './components/header-comp/header-comp';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})  
export class App {
}
