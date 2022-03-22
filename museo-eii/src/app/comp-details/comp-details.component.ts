import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { CompDevices, CompTypes, MyComponent, Cpu } from '../comp';
import { CpusService } from '../cpus.service';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.css']
})
export class CompDetailsComponent implements OnInit {

  imgUrl = environment.baseImgUrl;

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
      return CompTypes.generic;
  }

  getComp(id: number) {
    this.comp = this.cpuService.getCpu(id);
  }

  getCompsFromPeriod() {
    this.compsFromPeriod = this.cpuService.getCpusFromPeriod(this.comp.component_period_id);
  }

  getPeriodName() {
    this.periodService.getPeriod(this.comp.component_period_id).subscribe((p: Period) => this.periodName = p.period_name);
  }

  isPortable() {
    return this.comp.component_devices.split[','].includes(CompDevices.portable);
  }

  isDesktop() {
    return this.comp.component_devices.split[','].includes(CompDevices.desktop);
  }

  refresh(): void {
    window.location.reload();
  }
}
