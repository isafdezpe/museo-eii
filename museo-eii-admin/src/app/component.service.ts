import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
    return this.http.post(`${this.baseUrl}/postComp.php`, c);
  }

  editComponent(c: MyComponent) {
    return this.http.put(`${this.baseUrl}/updateComp.php`, c);
  }

  deleteComponent(cId: number) {
    return this.http.delete(`${this.baseUrl}/deleteComp.php?idComp=${cId}`);
  }

  getComponent(cId: number) {
    return this.http.get(`${this.baseUrl}/getComp.php?idComp=${cId}`);
  }

  getComponentsFromPeriod(pId: number) {
    return this.http.get(`${this.baseUrl}/getCompsPeriod.php?idPeriod=${pId}`);
  }

  getComponentImgs(cId: number) {
    return this.http.get(`${this.baseUrl}/getCompImgs.php?idComp=${cId}`);
  }

  uploadComponentImgs(form: FormGroup) {
    console.log(form.value);
    return this.http.post(`${this.baseUrl}/uploadCompImgs.php`, form.value);
  }
}
