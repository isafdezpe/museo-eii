export interface MyComponent {
    id: number,
    name: string,
    family: string,
    description: string,
    initYear: number,
    endYear: number,
    periodId: number,
    price: number,
    priceUnits: string,
    devices: string,
    imgNames: string[],
    famousSystem: string,
    famousSystemImg: Blob,
    type: CompTypes

    setDevices(devices: String[]);

    equals(c: MyComponent): boolean;
}

export enum CompDevices {desktop='DESKTOP', portable='PORTABLE'}

export enum CompTypes {cpu='CPU', gpu='GPU', generic='COMPONENT'}

export enum MemoryUnits { bit="b", byte="B"}

export enum SpeedUnits {herz="Hz", kiloherz="KHz"}

export enum PowerUnits {watios="W", kilowatios="KW"}

export class GenericComp implements MyComponent {

    id: number;
    name: string;
    family: string;
    description: string;
    initYear: number;
    endYear: number;
    periodId: number;
    price: number;
    priceUnits: string;
    devices: string;
    imgNames: string[];
    famousSystem: string;
    famousSystemImg: Blob;
    type: CompTypes;

    constructor(
        name: string,
        family: string,
        description: string,
        initYear: number,
        endYear: number,
        periodId: number,
        price: number,
        priceUnits: string,
        devices: string[],
        imgNames: string[],
        famousSystem: string,
        famousSystemImg: Blob,
        type: CompTypes,

        id?: number,
    ) {
        this.id = id;
        this.name = name;
        this.family = family;
        this.description = description;
        this.initYear = initYear;
        this.endYear = endYear;
        this.periodId = periodId;
        this.price = price;
        this.priceUnits = priceUnits;
        this.devices = "" + ((devices && devices.length > 0) ? (devices[0] + ((devices.length == 2) ? ", " + devices[1] : "")) : "");
        this.imgNames = imgNames;
        this.famousSystem = famousSystem;
        this.famousSystemImg = famousSystemImg;
        this.type = type;
    }

    setDevices(devices: String[]) {
        this.devices = "" + ((devices && devices.length > 0) ? (devices[0] + ((devices.length == 2) ? ", " + devices[1] : "")) : "");
    }

    equals(c: MyComponent): boolean {
        let devicesEq: boolean;
        if (!(this.devices) && !(c.devices)) devicesEq = true; 
        else if (!(this.devices) || !(c.devices)) devicesEq = false; 
        else devicesEq = this.devices.split[','].length === c.devices.split[','].length;
        if (devicesEq && this.devices && c.devices) this.devices.split[','].forEach((e) => devicesEq = c.devices.split[','].includes(e));
        else if (this.devices && c.devices) return false;
        return this.name === c.name && this.family === c.family && this.description === c.description && this.initYear === c.initYear && this.endYear === c.endYear 
            && this.periodId === c.periodId && this.price === c.price && this.priceUnits === c.priceUnits && devicesEq;
    }

}