import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddPeriodComponent } from './add-period/add-period.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { AddCompComponent } from './add-comp/add-comp.component';
import { FormEditPeriodComponent } from './edit-period/edit-period.component';
import { FormEditCompComponent } from './edit-comp/edit-comp.component';
import { CpuTypeFormComponent } from './cpu-type-form/cpu-type-form.component';
import { PeriodInputsComponent } from './period-inputs/period-inputs.component';
import { CompInputsComponent } from './comp-inputs/comp-inputs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPeriodsComponent } from './list-periods/list-periods.component';
import { PeriodComponent } from './period/period.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { CpuTypeDetailsComponent } from './cpu-type-details/cpu-type-details.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddPeriodComponent,
    MenuComponent,
    AddCompComponent,
    FormEditPeriodComponent,
    FormEditCompComponent,
    CpuTypeFormComponent,
    PeriodInputsComponent,
    CompInputsComponent,
    ListPeriodsComponent,
    PeriodComponent,
    MyComponentComponent,
    CpuTypeDetailsComponent,
    ConfirmationDialogComponent
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
    MatDialogModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
