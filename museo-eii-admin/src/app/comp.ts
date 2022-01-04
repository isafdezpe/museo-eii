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
    devices: string[],
    imgNames: string[],
    famousSystem: string,
    famousSystemImgName: string

    equals(c: MyComponent): boolean;
}

export enum CompDevices {desktop='DESKTOP', portable='PORTABLE'}

export enum CompTypes {cpu='CPU', gpu='GPU'}

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
    devices: string[];
    imgNames: string[];
    famousSystem: string;
    famousSystemImgName: string;

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
        famousSystemImgName: string,

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
        this.devices = devices;
        this.imgNames = imgNames;
        this.famousSystem = famousSystem;
        this.famousSystemImgName = famousSystemImgName;
    }

    equals(c: MyComponent): boolean {
        let devicesEq: boolean = this.devices.length === c.devices.length;
        if (devicesEq) this.devices.forEach((e) => devicesEq = c.devices.includes(e));
        else return false;
        return this.name === c.name && this.family === c.family && this.description === c.description && this.initYear === c.initYear && this.endYear === c.endYear 
            && this.periodId === c.periodId && this.price === c.price && this.priceUnits === c.priceUnits && devicesEq;
    }

}