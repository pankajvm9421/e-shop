import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { LoginModule } from '../login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    NgbModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ]
})
export class SharedModule { }
