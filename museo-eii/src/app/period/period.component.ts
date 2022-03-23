import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MyComponent } from '../comp';
import { ComponentService } from '../cpus.service';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {
  imgUrl = environment.baseImgUrl;

  previousPeriod: Period;
  nextPeriod: Period;
  period: Period | undefined;
  periods: Period[] = [];
  comps: MyComponent[] = [];
  cpuImgs: object[] = [];

  constructor(private route: ActivatedRoute, private periodService: PeriodService, private compService: ComponentService, private router: Router) {
    route.params.subscribe(() => {
      const routeParams = this.route.snapshot.paramMap;
      const idFromRoute = Number(routeParams.get('id'));
  
      this.getPeriod(idFromRoute);
    })
   }

  ngOnInit(): void {}

  getPeriod(id: number): void {
    this.periodService.getPeriods().subscribe((p: Period[]) => { 
      this.periods = p;
      let index = 0;
      this.periods.forEach((p: Period) => {
        if (p.period_id === id) {
          this.period = p;
          this.previousPeriod = (index > 0) ? this.periods[index-1] : undefined;
          this.nextPeriod = (index < this.periods.length) ? this.periods[index+1] : undefined;
        }
        index++;
      });
      this.getCpus(id);
    });
    //this.periodService.getPeriod(id).subscribe((p: Period) => this.period = p);
  }

  getCpus(periodId: number): void {
    this.compService.getComponentsFromPeriod(periodId).subscribe((comps: MyComponent[]) => {
      this.comps = comps;
      let famousSys = [];
      this.comps.forEach((c: MyComponent) => {
        if (c.famous_system_img !== "" && c.famous_system !== "") 
          famousSys.push({name: c.component_name, img: c.famous_system_img, sysName: c.famous_system});
        c.component_imgs = [];
        this.getImages(c.component_id);
      });
      this.period.famousSystems = famousSys;
      console.log(this.comps)
    });
  }

  /**
   * Obtiene las imágenes del componente 
   * @param id : id del componente del que se obtienen las imágenes
   */
   getImages(id: number) {
    this.compService.getComponentImgs(id).subscribe((imgs: {image}[]) => {
      imgs.forEach((i) => {
        this.comps.filter((c) => c.component_id === id)[0].component_imgs.push(i.image);
      })
    });
  }

 navigate(route) {
   this.router.navigateByUrl(route);
   window.location.reload();
 }

}
