import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: {email: string, password: string} = {email: "", password: ""};

  constructor(public router: Router, private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  /**
   * Comprueba el usuario y la contraseña introducidos. Si es correcto navega a la lista de periodos.
   */
  login() {
    this.userService.login(this.model.email, this.model.password).subscribe((data: any) => {
      this.userService.setToken(data.email);
      this.router.navigateByUrl('/listPeriods');
    }, error => {
      this.snackBar.open('Usuario o contraseña incorrectos', 'Cerrar', { duration: 1500 });
      this.model = {email: "", password: ""};

    }
      
    );
    
  }

  // resetPassword() {
  //   this.userService.passwordReset(this.email);
  // }

}
