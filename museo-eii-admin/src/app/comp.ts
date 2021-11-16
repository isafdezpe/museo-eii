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

}