import { CompTypes, GenericComp, MyComponent } from "./comp";

export class Cpu extends GenericComp implements MyComponent{

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
        passmark: number,
        transistors: number,
        
        id?: number,
    ){
        super(name, family, description, initYear, endYear, periodId, price, priceUnits, devices, imgNames, famousSystem, famousSystemImg, CompTypes.cpu, id);
        
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
        this.transistorSizeUnits = "nm";
        this.passmark = passmark;
        this.transistors = transistors;
    }

    equals(c: Cpu): boolean {
        return super.equals(c) && this.programMemory === c.programMemory && this.programMemoryUnits === c.programMemoryUnits && this.ramMemory === c.ramMemory && this.ramMemoryUnits === c.ramMemoryUnits
            && this.clockSpeed === c.clockSpeed && this.clockSpeedUnits === c.clockSpeedUnits && this.power === c.power && this.powerUnits === c.powerUnits && this.wordSize === c.wordSize && this.wordSizeUnits === c.wordSizeUnits
            && this.transistorSize === c.transistorSize && this.passmark === c.passmark && this.transistors === c.transistors;
    }
    
}
