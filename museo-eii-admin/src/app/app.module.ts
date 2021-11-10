import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    PeriodInputsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
