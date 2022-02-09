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
    famousSystemImg: string,
    type: CompTypes

}

export enum CompDevices {desktop='DESKTOP', portable='PORTABLE'}

export enum CompTypes {cpu='CPU', gpu='GPU', generic='COMPONENT'}

export enum MemoryUnits { bit="b", byte="B", kilobyte="KB"}

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
    famousSystemImg: string;
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
        famousSystemImg: string,
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
        this.devices = devices[0] + ((devices.length == 2) ? ", " + devices[1] : "");
        this.imgNames = imgNames;
        this.famousSystem = famousSystem;
        this.famousSystemImg = famousSystemImg;
        this.type = type;
    }

}