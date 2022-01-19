import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() initialObject;
  @Input() model;

  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  navigate(route: string) {
    if (this.isEdited())
      this.dialog
      .open(ConfirmationDialogComponent, {data: "No se han guardado los cambios realizados en el formulario, ¿desea continuar?"})
      .afterClosed()
      .subscribe((confirmed: boolean) => {if (confirmed) this.router.navigateByUrl(route);});
    else
      this.router.navigateByUrl(route);
  }

  isEdited() {
    if (this.initialObject === undefined && this.model === undefined)
      return false;
    return !this.initialObject.equals(this.model);
  }

}
