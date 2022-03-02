import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompDevices, MyComponent } from '../comp';

@Component({
  selector: 'app-comp-inputs',
  templateUrl: './comp-inputs.component.html',
  styleUrls: ['./comp-inputs.component.css']
})
export class CompInputsComponent implements OnInit {

  imgUrl = environment.baseImgUrl;

  @Input() model: MyComponent;

  priceUnits: string[] = ['€', '$'];

  constructor() { }

  ngOnInit(): void {
  }

  isDesktop() {
    return this.model.component_devices.split(',').includes(CompDevices.desktop);
  }

  isPortable() {
    return this.model.component_devices.split(',').includes(CompDevices.portable);
  }

  changePriceUnits(u: string) {
    this.model.component_price_units = this.priceUnits.filter((e) => e === u)[0];
  }

  onChange(portable: boolean, desktop: boolean) {
    if (portable && desktop) this.model.setDevices([CompDevices.portable, CompDevices.desktop]);
    else if (portable) this.model.setDevices([CompDevices.portable]);
    else if (desktop) this.model.setDevices([CompDevices.desktop]);
    else this.model.setDevices([]);
  }

  sysImgChange(e: Event) {
    let element = e.target  as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length == 1)
      this.model.famous_system_img = fileList[0].name;
  }

  compImgsChange(e: Event) {
    let element = e.target  as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      for (let i = 0; i < fileList.length; i++){
        if (!this.model.component_imgs.includes(fileList[i].name))
          this.model.component_imgs.push(fileList[i].name);
      }
    }
  }
}
