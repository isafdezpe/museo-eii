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
    var name = document.getElementById("pname");
    var desc = document.getElementById("pdesc");
    var trivia = document.getElementById("ptrivia");
    var events = document.getElementById("pevents");
    var isValid = name.innerText.length > 0 && desc.innerText.length > 0 && trivia.innerText.length > 0 && events.innerText.length > 0;
    if (isValid) {
      //save period 
      //get id
      let periodId: number = 1;
      this.router.navigateByUrl('/addComp/' + periodId);
    }
  }

}
