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

  @Input() isEdited: boolean;

  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  navigate(route: string) {
    let cont: boolean = true;
    if (this.isEdited)
      this.dialog
      .open(ConfirmationDialogComponent)
      .afterClosed()
      .subscribe((confirmed: boolean) => {if (confirmed) this.router.navigateByUrl(route);});
    else
      this.router.navigateByUrl(route);
  }

}
