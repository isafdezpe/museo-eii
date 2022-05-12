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

  imgUrl = environment.baseImgUrl; // url de la carpeta en la que se guardan las imágenes

  previousPeriod: Period; // periodo anterior al mostrado
  nextPeriod: Period; // periodo siguiente al mostrado
  period: Period | undefined;  // periodo
  
  comps: MyComponent[] = []; // componentes del periodo

  constructor(private route: ActivatedRoute, private periodService: PeriodService, private compService: ComponentService, private router: Router) {
    // recargar el componente cuando cambian los parámetros de la url
    route.params.subscribe(() => {
      // saca el id del periodo
      const routeParams = this.route.snapshot.paramMap;
      const idFromRoute = Number(routeParams.get('id'));
  
      this.getPeriod(idFromRoute);
    })
   }

  ngOnInit(): void {}

  /**
   * Obtiene el periodo actual, el anterior y el siguiente
   * @param id : id del periodo 
   */
  getPeriod(id: number): void {
    this.periodService.getPeriods().subscribe((periods: Period[]) => { 
      let index = 0;
      periods.forEach((p: Period) => {
        if (p.period_id === id) {
          this.period = p;
          this.previousPeriod = (index > 0) ? periods[index-1] : undefined;
          this.nextPeriod = (index < periods.length) ? periods[index+1] : undefined;
        }
        index++;
      });
      this.getComps(id);
    });
  }

  /**
   * Obtiene los componentes del periodo y el sistema famoso de cada componente
   * @param periodId : periodo del que se obtienen los componentes
   */
  getComps(periodId: number): void {
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

}
