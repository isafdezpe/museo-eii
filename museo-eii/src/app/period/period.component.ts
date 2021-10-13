import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cpu } from '../cpu';
import { CpusService } from '../cpus.service';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {

  period: Period | undefined;
  cpus: Cpu[] = [];
  cpuImgs: object[] = [];

  constructor(private route: ActivatedRoute, private periodService: PeriodService, private cpuService: CpusService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('id'));

    this.getPeriod(idFromRoute);
    this.getCpus(idFromRoute);
    this.getCpuImgs();
  }

  getPeriod(id: number): void {
    this.period = this.periodService.getPeriod(id);
  }

  getCpus(periodId: number): void {
    this.cpus = this.cpuService.getCpusFromPeriod(periodId);
  }

  getCpuImgs(): void {
    this.cpus.forEach((c) => this.cpuImgs.push({
      image: '../../assets/img/'+c.imgNames[0],
      alt: c.name
    }))
  }


}
