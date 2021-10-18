import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goToAddComp() {
    //save period 
    //get id
    let periodId: number = 0;
    this.router.navigateByUrl('/addComp/' + periodId);
  }

}
