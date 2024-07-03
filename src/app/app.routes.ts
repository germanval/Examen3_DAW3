import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './dashboard/post/location/location.component';
import { TodosComponent } from './dashboard/post/todos/todos.component';

export const routes: Routes = [
    {path:"dashboard",component:DashboardComponent,
        children: [
            {path:"post",component:LocationComponent},
            {path:"post/:id",component:TodosComponent}
        ]
    },
    {path:"",redirectTo:"dasboard",pathMatch:"full"}
];
