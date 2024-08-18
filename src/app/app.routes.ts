import { Routes } from '@angular/router';

import { AboutComponent } from './MyComponent/about/about.component';
import { TodosComponent } from './MyComponent/todos/todos.component';


export const routes: Routes = [
    {path: '', component: TodosComponent},
    {path: 'about', component: AboutComponent}
];
