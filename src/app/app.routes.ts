import { Routes } from '@angular/router';
import { CompPadre } from './components/comp-padre/comp-padre';
import { UserList } from './components/user-list/user-list';
import { HomePage } from './pages/home-page/home-page';
export const routes: Routes = [
    {
        path : '',
        component : HomePage
    },
    {
        path : 'practices/crud',
        component : UserList
    },
    {
        path : 'practices/fatherchildrencomponent',
        component : CompPadre
    }
];
