import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompDevices, MyComponent } from '../comp';

@Component({
  selector: 'app-comp-inputs',
  templateUrl: './comp-inputs.component.html',
  styleUrls: ['./comp-inputs.component.css']
})
export class CompInputsComponent implements OnInit {

  imgUrl = environment.baseImgUrl; // url de la carpeta en la que se guardan las imágenes

  @Input() model: MyComponent; // objeto asignado en el formulario sobre el que se realizan los cambios

  @Input() images; // imágenes subidas a través de los inputs[file]
  @Input() imagesNames: string[]; // nombres de las imágenes subidas

  @ViewChild('sysImgInput')
  sysImgInput!: ElementRef; // input[file] del sistema famoso
  @ViewChild('compImgInput')
  compImgInput!: ElementRef; // input[file] de las imágenes del componente

  priceUnits: string[] = ['€', '$']; // unidades de moneda

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * 
   * @returns si el componente es usado en dispositivos de escritorio
   */
  isDesktop() {
    return this.model.component_devices.split(',').includes(CompDevices.desktop);
  }

  /**
   * 
   * @returns si el componente es usado en dispositivos portátiles
   */
  isPortable() {
    return this.model.component_devices.split(',').includes(CompDevices.portable);
  }

  /**
   * Cambia la unidad de moneda seleccionada en el combobox
   * @param u : nueva unidad de moneda seleccionada
   */
  changePriceUnits(u: string) {
    this.model.component_price_units = this.priceUnits.filter((e) => e === u)[0];
  }

  /**
   * Cambia la selección realizada en el tipo de dispositivos
   * @param portable : valor de selección del checkbox correspondiente a dispositivos portátiles
   * @param desktop : valor de selección del checkbox correspondiente a dispositivos móviles
   */
  onChange(portable: boolean, desktop: boolean) {
    if (portable && desktop) this.model.setDevices([CompDevices.portable, CompDevices.desktop]);
    else if (portable) this.model.setDevices([CompDevices.portable]);
    else if (desktop) this.model.setDevices([CompDevices.desktop]);
    else this.model.setDevices([]);
  }

  /**
   * Añade (o reemplaza si ya existe) la imagen seleccionada correspondiente al sistema famoso
   * @param e : subida de archivos en el input[file]
   */
  sysImgChange(e: Event) {
    // obtiene el archivo subido
    let element = e.target  as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length == 1) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        // saca el índice correspondiente a la imagen y su nombre en los respectivos arrays
        let i = this.imagesNames.indexOf(this.model.famous_system_img.split('.')[0]);
        // si ya existe en el array se reemplaza la imagen
        if (i != -1) this.images[i] = event.target.result;
        // si no existe se añade
        else this.images.push(event.target.result);
      }
      reader.readAsDataURL(fileList[0]);
      // se divide el nombre para obtener el nombre con el que se va a guardar y la extensión
      let fileNameExt = fileList[0].name.split('.');
      // si existía previamente otra imagen reemplazamos el nombre en el array
      if (this.model.famous_system_img) {
        let i = this.imagesNames.indexOf(this.model.famous_system_img.split('.')[0]);
        this.imagesNames[i] = fileNameExt[0];
      } // si no existe se añade 
      else this.imagesNames.push(fileNameExt[0]);
      // se asigna el nombre y la extensión del archivo que se va a subir
      this.model.famous_system_img = fileNameExt[0] + '.' + ((fileNameExt[fileNameExt.length - 1] == 'jpg') ? 'jpeg' : fileNameExt[fileNameExt.length - 1]);
    }
    // resetea el valor del input
    this.sysImgInput.nativeElement.value = '';
  }

  /**
   * Añade las imágenes seleccionadas para el componente
   * @param e : subida de archivos en el input[file]
   */
  compImgsChange(e: Event) {
    // obtiene los archivos subidos
    let element = e.target  as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      for (let i = 0; i < fileList.length; i++){
        // se divide el nombre para obtener el nombre con el que se va a guardar y la extensión
        let fileNameExt = fileList[i].name.split('.');
        // nombre y extensión del archivo que se va a subir
        let saveName = fileNameExt[0] + '.' + ((fileNameExt[fileNameExt.length - 1] == 'jpg') ? 'jpeg' : fileNameExt[fileNameExt.length - 1]);
        // si la imagen ya existe entre las imágenes del componente no se hace nada, si no existe se añade
        if (!this.model.component_imgs.includes(saveName)) {
          var reader = new FileReader();
          reader.onload = (event:any) => {
            this.images.push(event.target.result);
          }
          reader.readAsDataURL(fileList[i]);
          // se añade el nombre de la imagen
          this.imagesNames.push(fileNameExt[0]);
          // asigna el nombre 
          this.model.component_imgs.push(saveName);
        }
      }
    }
    // resetea el valor del input
    this.compImgInput.nativeElement.value = '';
  }

  /**
   * Elimina una imagen de entre las recién añadidas al componente
   * @param name : imagen que se va a eliminar
   */
  removeImage(name: string) {
    // obtiene el índice de la imagen en los arrays correspondientes
    let index = this.images.indexOf(name);
    if (index != -1) {
      // obtiene el nombre con el que se guarda dicha imagen
      let imgName = this.imagesNames[index];
      // elimina la imagen de ambos arrays
      this.images.splice(index, 1);
      this.imagesNames.splice(index, 1);
      // elimina la imagen del componente
      this.model.component_imgs.forEach((img, ind) => {
        if (img.split('.')[0] === imgName)
          this.model.component_imgs.splice(ind,1);
      });
    }
  }
}
