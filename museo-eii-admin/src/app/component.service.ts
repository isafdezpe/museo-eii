import { Injectable } from '@angular/core';
import { MyComponent } from './comp';
import { CPUS } from './mock-cpus';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {


  constructor() { }

  addComponent(c: MyComponent) {
    
  }

  editComponent(c: MyComponent) {
    
  }

  deleteComponent(c: MyComponent) {

  }

  getComponent(cId: number): MyComponent {
    return CPUS.filter((e) => e.id === cId)[0];
  }

  getAll() {
    return CPUS;
  }
}
