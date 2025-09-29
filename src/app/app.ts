import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/test/user-profile/user-profile/user-profile';
import { UserList } from './components/user-list/user-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserList,UserProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})  
export class App {
}
