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

  @Input() images;
  @Input() imagesNames;

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
    if (fileList && fileList.length == 1) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        console.log(event.target.result);
        this.images.push(event.target.result);
        //this.model.famous_system_img = event.target.result.name;
      }
      reader.readAsDataURL(fileList[0]);
      this.model.famous_system_img = fileList[0].name;
    }
      console.log('***********FAMOUS SYS IMGS:**************')
      console.log(this.images);
      console.log(this.model);
  }

  compImgsChange(e: Event) {
    let element = e.target  as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      for (let i = 0; i < fileList.length; i++){
        if (!this.model.component_imgs.includes(fileList[i].name)) {
          var reader = new FileReader();
          reader.onload = (event:any) => {
            this.images.push(event.target.result);
            this.model.component_imgs.push(event.target.result.name);
          }
          reader.readAsDataURL(fileList[i]);
          this.model.component_imgs.push(fileList[i].name);
        }
      }
    }
    console.log('***********COMP IMGS:**************')
      console.log(this.images);
      console.log(this.model);
  }
}
