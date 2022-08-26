import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'product', component: HomeComponent},
  {path: 'sign-In', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', redirectTo: "/product", pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
