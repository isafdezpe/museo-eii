import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompComponent } from './add-comp/add-comp.component';
import { AddPeriodComponent } from './add-period/add-period.component';
import { AuthGuard } from './auth-guard.guard';
import { FormEditCompComponent } from './edit-comp/edit-comp.component';
import { FormEditPeriodComponent } from './edit-period/edit-period.component';
import { ListPeriodsComponent } from './list-periods/list-periods.component';
import { LoginComponent } from './login/login.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { PeriodComponent } from './period/period.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listPeriods', component: ListPeriodsComponent, canActivate: [AuthGuard] },
  { path: 'period/:periodId', component: PeriodComponent, canActivate: [AuthGuard] },
  { path: 'component/:compId', component: MyComponentComponent, canActivate: [AuthGuard] },
  { path: 'addPeriod', component: AddPeriodComponent, canActivate: [AuthGuard] },
  { path: 'addComp', component: AddCompComponent, canActivate: [AuthGuard] },
  { path: 'editPeriod/:periodId', component: FormEditPeriodComponent, canActivate: [AuthGuard] }, 
  { path: 'editComp/:compId', component: FormEditCompComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/listPeriods', pathMatch: 'full', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
