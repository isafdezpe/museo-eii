import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyComponent } from '../comp';
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
  comps: MyComponent[] = [];
  cpuImgs: object[] = [];

  constructor(private route: ActivatedRoute, private periodService: PeriodService, private cpuService: CpusService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('id'));

    this.getPeriod(idFromRoute);
    this.getCpus(idFromRoute);
    this.getCpuImgs();
    let famousSys = [];
    this.comps.forEach((c: MyComponent) => famousSys.push({name: c.name, img: c.famousSystemImg, sysName: c.famousSystem}));
    this.period.famousSystems = famousSys;
  }

  getPeriod(id: number): void {
    this.periodService.getPeriod(id).subscribe((p: Period) => this.period = p);
  }

  getCpus(periodId: number): void {
    this.comps = this.cpuService.getCpusFromPeriod(periodId);
  }

  getCpuImgs(): void {
    this.comps.forEach((c) => this.cpuImgs.push({
      image: '../../assets/img/'+c.imgNames[0],
      alt: c.name
    }))
  }


}
