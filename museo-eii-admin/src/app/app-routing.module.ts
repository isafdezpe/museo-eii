import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAddCompComponent } from './form-add-comp/form-add-comp.component';
import { FormAddComponent } from './form-add/form-add.component';
import { FormEditCompComponent } from './form-edit-comp/form-edit-comp.component';
import { FormEditPeriodComponent } from './form-edit-period/form-edit-period.component';
import { ListPeriodsComponent } from './list-periods/list-periods.component';
import { LoginComponent } from './login/login.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { PeriodComponent } from './period/period.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listPeriods', component: ListPeriodsComponent },
  { path: 'period/:periodId', component: PeriodComponent },
  { path: 'component/:compId', component: MyComponentComponent },
  { path: 'addPeriod', component: FormAddComponent},
  { path: 'addComp', component: FormAddCompComponent},
  { path: 'addComp/:periodId', component: FormAddCompComponent},
  { path: 'editPeriod/:periodId', component: FormEditPeriodComponent}, 
  { path: 'editComp/:compId', component: FormEditCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
