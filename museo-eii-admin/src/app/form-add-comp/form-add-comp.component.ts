import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-add-comp',
  templateUrl: './form-add-comp.component.html',
  styleUrls: ['./form-add-comp.component.css']
})
export class FormAddCompComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    var id = Number(routeParams.get('periodId'));
    if (id) {
      
    }
  }

}
