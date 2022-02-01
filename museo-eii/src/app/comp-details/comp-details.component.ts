import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompDevices, CompTypes, MyComponent } from '../comp';
import { Cpu } from '../cpu';
import { CpusService } from '../cpus.service';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.css']
})
export class CompDetailsComponent implements OnInit {

  comp: MyComponent;
  compsFromPeriod: MyComponent[] = [];
  periodName: string = '';
  type: String;

  constructor(private route: ActivatedRoute,private cpuService: CpusService, private periodService: PeriodService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('id'));

    this.getComp(idFromRoute);
    this.getCompsFromPeriod();
    this.getPeriodName();
    this.type = this.checkType();
  }

  checkType(): String {
    if (this.comp instanceof Cpu)
      return CompTypes.cpu;
    else
      return CompTypes.gpu;
  }

  getComp(id: number) {
    this.comp = this.cpuService.getCpu(id);
  }

  getCompsFromPeriod() {
    this.compsFromPeriod = this.cpuService.getCpusFromPeriod(this.comp.periodId);
  }

  getPeriodName() {
    this.periodService.getPeriod(this.comp.periodId).subscribe((p: Period) => this.periodName = p.period_name);
  }

  isPortable() {
    return this.comp.devices.split[','].includes(CompDevices.portable);
  }

  isDesktop() {
    return this.comp.devices.split[','].includes(CompDevices.desktop);
  }

  refresh(): void {
    window.location.reload();
  }
}
