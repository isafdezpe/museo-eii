import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompComponent } from './add-comp/add-comp.component';
import { AddPeriodComponent } from './add-period/add-period.component';
import { FormEditCompComponent } from './edit-comp/edit-comp.component';
import { FormEditPeriodComponent } from './edit-period/edit-period.component';
import { ListPeriodsComponent } from './list-periods/list-periods.component';
import { LoginComponent } from './login/login.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { PeriodComponent } from './period/period.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listPeriods', component: ListPeriodsComponent },
  { path: 'period/:periodId', component: PeriodComponent },
  { path: 'component/:compId', component: MyComponentComponent },
  { path: 'addPeriod', component: AddPeriodComponent},
  { path: 'addComp', component: AddCompComponent},
  { path: 'addComp/:periodId', component: AddCompComponent},
  { path: 'editPeriod/:periodId', component: FormEditPeriodComponent}, 
  { path: 'editComp/:compId', component: FormEditCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
