import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() initialObject; // objeto con los valores iniciales
  @Input() model; // objeto sobre el que se realizan los cambios en el formulario

  constructor(public router: Router, public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
  }

  /**
   * Navega a otra url de la aplicación. Si un formulario está editado muestra un diálogo para continuar o no
   * @param route : url a la que se quiere navegar
   */
  navigate(route: string) {
    if (this.isEdited())
      this.dialog
      .open(ConfirmationDialogComponent, {data: "No se han guardado los cambios realizados en el formulario, ¿desea continuar?"})
      .afterClosed()
      .subscribe((confirmed: boolean) => {if (confirmed) this.router.navigateByUrl(route);});
    else
      this.router.navigateByUrl(route);
  }

  /**
   * 
   * @returns si initialObject y model son iguales o model ha sido editado 
   */
  isEdited() {
    if (this.initialObject === undefined && this.model === undefined)
      return false;
      
    return !this.initialObject.equals(this.model);
  }

  /**
   * Cierra la sesión del usuario logueado
   */
  exitSession() {
    this.userService.deleteToken();
    this.router.navigateByUrl("");
  }

}
