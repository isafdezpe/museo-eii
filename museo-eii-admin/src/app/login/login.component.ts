import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Comprueba el usuario y la contraseña introducidos. Si es correcto navega a la lista de periodos.
   */
  login() {
    this.router.navigateByUrl('/listPeriods');
  }

}
