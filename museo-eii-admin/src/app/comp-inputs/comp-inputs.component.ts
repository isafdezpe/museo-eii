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
  @Input() imagesNames: string[];

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
        let i = this.imagesNames.indexOf(this.model.famous_system_img.split('.')[0]);
        if (i != -1) this.images[i] = event.target.result;
        else this.images.push(event.target.result);
      }
      reader.readAsDataURL(fileList[0]);
      let fileNameExt = fileList[0].name.split('.');
      if (this.model.famous_system_img) {
        let i = this.imagesNames.indexOf(this.model.famous_system_img.split('.')[0]);
        this.imagesNames[i] = fileNameExt[0];
      } else this.imagesNames.push(fileNameExt[0]);
      this.model.famous_system_img = fileNameExt[0] + '.' + ((fileNameExt[fileNameExt.length - 1] == 'jpg') ? 'jpeg' : fileNameExt[fileNameExt.length - 1]);
    }
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
          }
          reader.readAsDataURL(fileList[i]);
          let fileNameExt = fileList[i].name.split('.');
          this.imagesNames.push(fileNameExt[0]);
          this.model.component_imgs.push(fileNameExt[0] + '.' + ((fileNameExt[fileNameExt.length - 1] == 'jpg') ? 'jpeg' : fileNameExt[fileNameExt.length - 1]));
        }
      }
    }
  }
}
