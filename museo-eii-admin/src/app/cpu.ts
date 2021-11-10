import { MyComponent } from "./comp";

export class Cpu implements MyComponent{

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

    programMemory: number;
    programMemoryUnits: string;
    ramMemory: number;
    ramMemoryUnits: string;
    clockSpeed: number;
    clockSpeedUnits: string;
    power: number;
    powerUnits: string;
    wordSize: number;
    wordSizeUnits: string;
    transistorSize: number;
    transistorSizeUnits: string;
    passmark: number;
    transistors: number;

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
        famousSystemImgName: string,

        programMemory: number,
        programMemoryUnits: string,
        ramMemory: number,
        ramMemoryUnits: string,
        clockSpeed: number,
        clockSpeedUnits: string,
        power: number,
        powerUnits: string,
        wordSize: number,
        wordSizeUnits: string,
        transistorSize: number,
        transistorSizeUnits: string,
        passmark: number,
        transistors: number,
    ){
        this.id = id;
        this.name = name;
        this.family = family;
        this.description = description;
        this.initYear = initYear;
        this.endYear = endYear;
        this.periodId = periodId;
        this.devices = devices;
        this.imgNames = imgNames;
        this.famousSystem = famousSystem;
        this.famousSystemImgName = famousSystemImgName;
        this.price = price;
        this.priceUnits = priceUnits;
        this.programMemory = programMemory;
        this.programMemoryUnits = programMemoryUnits;
        this.ramMemory = ramMemory;
        this.ramMemoryUnits = ramMemoryUnits;
        this.clockSpeed = clockSpeed;
        this.clockSpeedUnits = clockSpeedUnits;
        this.power = power;
        this.powerUnits = powerUnits;
        this.wordSize = wordSize;
        this.wordSizeUnits = wordSizeUnits;
        this.transistorSize = transistorSize;
        this.transistorSizeUnits = transistorSizeUnits;
        this.passmark = passmark;
        this.transistors = transistors;
    }
    
}

export enum CpuDevices {desktop='DESKTOP', portable='PORTABLE'}