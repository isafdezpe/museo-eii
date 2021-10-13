import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAddComponent } from './form-add/form-add.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'add', component: FormAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
