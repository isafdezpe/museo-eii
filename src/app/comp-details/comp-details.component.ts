import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cpu, CpuDevices } from '../cpu';
import { CpusService } from '../cpus.service';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.css']
})
export class CompDetailsComponent implements OnInit {

  comp: Cpu | undefined;
  compsFromPeriod: Cpu[] = [];
  periodName: string = '';

  constructor(private route: ActivatedRoute,private cpuService: CpusService, private periodService: PeriodService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('id'));

    this.getComp(idFromRoute);
    this.getCompsFromPeriod();
    this.getPeriodName();
  }

  getComp(id: number) {
    this.comp = this.cpuService.getCpu(id);
  }

  getCompsFromPeriod() {
    this.compsFromPeriod = this.cpuService.getCpusFromPeriod(this.comp.periodId);
  }

  getPeriodName() {
    this.periodName = this.periodService.getPeriod(this.comp.periodId).name;
  }

  isPortable() {
    return this.comp.devices.includes(CpuDevices.portable);
  }

  isDesktop() {
    return this.comp.devices.includes(CpuDevices.desktop);
  }

  refresh(): void {
    window.location.reload();
  }
}
