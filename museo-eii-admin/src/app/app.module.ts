import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormAddComponent } from './form-add/form-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { FormAddCompComponent } from './form-add-comp/form-add-comp.component';
import { FormEditPeriodComponent } from './form-edit-period/form-edit-period.component';
import { FormEditCompComponent } from './form-edit-comp/form-edit-comp.component';
import { CpuTypeFormComponent } from './cpu-type-form/cpu-type-form.component';
import { PeriodInputsComponent } from './period-inputs/period-inputs.component';
import { CompInputsComponent } from './comp-inputs/comp-inputs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPeriodsComponent } from './list-periods/list-periods.component';
import { PeriodComponent } from './period/period.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormAddComponent,
    MenuComponent,
    FormAddCompComponent,
    FormEditPeriodComponent,
    FormEditCompComponent,
    CpuTypeFormComponent,
    PeriodInputsComponent,
    CompInputsComponent,
    ListPeriodsComponent,
    PeriodComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
