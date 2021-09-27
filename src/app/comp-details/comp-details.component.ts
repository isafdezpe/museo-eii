import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cpu, CpuDevices } from '../cpu';
import { CpusService } from '../cpus.service';

@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.css']
})
export class CompDetailsComponent implements OnInit {

  comp: Cpu | undefined;

  constructor(private route: ActivatedRoute,private cpuService: CpusService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('id'));

    this.getComp(idFromRoute);
  }

  getComp(id: number) {
    this.comp = this.cpuService.getCpu(id);
  }

  isPortable() {
    return this.comp.devices.includes(CpuDevices.portable);
  }

  isDesktop() {
    return this.comp.devices.includes(CpuDevices.desktop);
  }
}
