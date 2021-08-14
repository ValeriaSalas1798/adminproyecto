import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule} from '@angular/router';

//aqui se declaran los componentes que utilizara el modulo
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages.component';

//aqui se declaran los modulos a importar
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficaComponent,
    PagesComponent,
  ],
  
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficaComponent,
    PagesComponent,
  ] ,

  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class PagesModule { }
