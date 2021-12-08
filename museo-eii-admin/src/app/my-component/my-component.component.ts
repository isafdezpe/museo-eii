import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompDevices, CompTypes, MyComponent } from '../comp';
import { ComponentService } from '../component.service';
import { Cpu } from '../cpu';
import { Period } from '../period';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  c: MyComponent;
  p: Period;

  type: String;

  constructor(private route: ActivatedRoute, private componentService: ComponentService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('compId'));
    this.c = this.componentService.getComponent(idFromRoute);
    this.p = this.componentService.getPeriodForComponent(this.c);
    this.type = this.checkType();
  }
  
  deleteComponent(c: MyComponent) {
    
  }
  
  checkType(): String {
    if (this.c instanceof Cpu)
      return CompTypes.cpu;
    else
      return CompTypes.gpu;
  }

  isPortable() {
    return this.c.devices.includes(CompDevices.portable);
  }

  isDesktop() {
    return this.c.devices.includes(CompDevices.desktop);
  }

}
