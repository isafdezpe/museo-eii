import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Period } from '../period';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  model: Period = new Period(-1, "", [], [], [], []);

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    //save period 
    //get id*/
    let periodId: number = 1;
    this.router.navigateByUrl('/addComp/' + periodId);
  }

}
