import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Cpu } from '../cpu';
import { Period } from '../period';
import { CompTypes, MyComponent } from '../comp';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentService } from '../component.service';
import { ActivatedRoute } from '@angular/router';
import { PeriodService } from '../period.service';


@Component({
  selector: 'app-edit-comp',
  templateUrl: './edit-comp.component.html',
  styleUrls: ['./edit-comp.component.css']
})
export class FormEditCompComponent implements OnInit {

  periods: Period[];
  p: Period;

  priceUnits: String[] = ['€', '$'];
  priceUnit: String;

  //comps: MyComponent[] = [];
  c: MyComponent;
  model: MyComponent;

  type: String;

  constructor(private route: ActivatedRoute, private componentService: ComponentService, private periodService: PeriodService, private snackBar: MatSnackBar, private _location: Location) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('compId'));
    this.c = this.componentService.getComponent(idFromRoute);
    this.periodService.getAll().subscribe((periods: Period[]) => this.periods = periods);
    this.periodService.getPeriod(this.c.periodId).subscribe((period: Period) => this.p = period);
    // this.comps = CPUS.filter((e) => e.periodId === this.p.id);
    // this.c = this.comps[0];
    this.priceUnit = this.c.priceUnits;
    this.model = this.cloneComp(this.c);
    this.type = this.checkType();
  }

  changePeriod(p: string) {
    this.periodService.getPeriodByName(this.model.name).subscribe((p: Period) => this.p = p);
     this.c.periodId = this.p.id;
    //  this.comps = CPUS.filter((e) => e.periodId === this.p.id);
    //  this.c = this.comps[0];
    //  this.priceUnit = this.c.priceUnits;
    //  this.model = this.cloneComp(this.c);
   }

  // changeComp(c: string) {
  //   this.c = this.comps.filter((e) => e.name === c)[0];
  //   this.priceUnit = this.c.priceUnits;
  //   this.model = this.cloneComp(this.c);
  // }

  submit() {
    /*this.componentService.editComponent(this.model).subscribe(() => {
      this.snackBar.open('Componente actualizado', undefined, {duration:1500})
    });*/
  }

  resetForm() {
    this.model = this.cloneComp(this.c);
  }

  cloneComp(c: MyComponent): MyComponent{
    if (c instanceof Cpu)
      return new Cpu(c.name, c.family, c.description, c.initYear, c.endYear, c.periodId, c.price, c.priceUnits, c.devices, c.imgNames, c.famousSystem, c.famousSystemImgName, c.programMemory, c.programMemoryUnits, 
      c.ramMemory, c.ramMemoryUnits, c.clockSpeed, c.clockSpeedUnits, c.power, c.powerUnits, c.wordSize, c.wordSizeUnits, c.transistorSize, c.passmark, c.transistors, c.id);
  }

  checkType(): String {
    if (this.c instanceof Cpu)
      return CompTypes.cpu;
    else
      return CompTypes.gpu;
  }
  
  goBack() {
    this._location.back();
  }

  isEdited(): boolean {
    return this.c.equals(this.model);
  }
  
}
