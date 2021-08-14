import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//aqui se importan los modulos
import { PagesRoutingModule } from './pages/pages.routing';

//aqui se importan los componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.modules';


const routes: Routes =[
 
  {path:'', redirectTo: '/dashboard', pathMatch:'full'},  
  {path:'**', component: NopagefoundComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
