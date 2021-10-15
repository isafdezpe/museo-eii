import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormAddComponent } from './form-add/form-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { FormAddCompComponent } from './form-add-comp/form-add-comp.component';
import { FormEditPeriodComponent } from './form-edit-period/form-edit-period.component';
import { FormEditCompComponent } from './form-edit-comp/form-edit-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormAddComponent,
    MenuComponent,
    FormAddCompComponent,
    FormEditPeriodComponent,
    FormEditCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
