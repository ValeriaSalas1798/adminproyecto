import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//aqui se declara los componentes que utiliza el modulo
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  
  //se los utilizará fuera del modulo
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    
  ],

  imports: [
    CommonModule
    
  ]
})
export class SharedModule { }
