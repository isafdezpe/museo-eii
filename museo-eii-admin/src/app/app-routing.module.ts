import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAddCompComponent } from './form-add-comp/form-add-comp.component';
import { FormAddComponent } from './form-add/form-add.component';
import { FormEditCompComponent } from './form-edit-comp/form-edit-comp.component';
import { FormEditPeriodComponent } from './form-edit-period/form-edit-period.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'addPeriod', component: FormAddComponent},
  { path: 'addComp', component: FormAddCompComponent},
  { path: 'editPeriod', component: FormEditPeriodComponent}, 
  { path: 'editComp', component: FormEditCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
