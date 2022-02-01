import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MyComponent } from './comp';
import { Cpu } from './cpu';
import { CPUS } from './mock-cpus';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  addComponent(c: MyComponent) {
    if (c instanceof Cpu) {
      let postComp = this.http.post(`${this.baseUrl}/postComp.php`, c);
      return this.http.post(`${this.baseUrl}/postCpu.php`, c);
    }
    return this.http.post(`${this.baseUrl}/postComp.php`, c);
  }

  editComponent(c: MyComponent) {
    if (c instanceof Cpu)
      return this.http.put(`${this.baseUrl}/updateCpu.php`, c);

    return this.http.put(`${this.baseUrl}/updateComp.php`, c);
  }

  deleteComponent(c: MyComponent) {
    return this.http.delete(`${this.baseUrl}/deleteComp.php?idComp=${c.id}`);
  }

  getComponent(cId: number) {
    return this.http.get(`${this.baseUrl}/getComp.php?idComp=${cId}`);
  }


  getComponentsFromPeriod(pId: number) {
    console.log(pId);
    return this.http.get(`${this.baseUrl}/getCompsPeriod.php?idPeriod=$${pId}`);
  }

  getComponentImgs(cId: number) {

  }
}
