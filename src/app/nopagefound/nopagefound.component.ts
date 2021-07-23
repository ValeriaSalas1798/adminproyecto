import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: [ './nopagefound.component.css' ],
})



export class NopagefoundComponent  {
  year= new Date().getFullYear();

}

@NgModule({
  declarations: [
    
  ],  
  imports: [
    RouterModule,
  ],
})

export class AuthModule { }