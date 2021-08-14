import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

//Para minimizar la carga de app-routing.modules.ts 
//Se declaran como hijos todos los componentes que pertenecen a la carpeta "pages"
const routes: Routes = [
    {
        path:'dashboard', 
        component: PagesComponent,
        children:[
            {path:'', component: DashboardComponent},
            {path:'progress', component:ProgressComponent },
        ]
    },
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
