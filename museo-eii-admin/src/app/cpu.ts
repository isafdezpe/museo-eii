import { CompTypes, GenericComp, MyComponent } from "./comp";

export class Cpu extends GenericComp implements MyComponent{

    program_memory: number;
    program_memory_units: string;
    ram_memory: number;
    ram_memory_units: string;
    clockspeed: number;
    clockspeed_units: string;
    cpu_power: number;
    cpu_power_units: string;
    wordsize: number;
    wordsize_units: string;
    transistor_size: number;
    transistor_size_units: string;
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
        
        this.program_memory = programMemory;
        this.program_memory_units = programMemoryUnits;
        this.ram_memory = ramMemory;
        this.ram_memory_units = ramMemoryUnits;
        this.clockspeed = clockSpeed;
        this.clockspeed_units = clockSpeedUnits;
        this.cpu_power = power;
        this.cpu_power_units = powerUnits;
        this.wordsize = wordSize;
        this.wordsize_units = wordSizeUnits;
        this.transistor_size = transistorSize;
        this.transistor_size_units = "nm";
        this.passmark = passmark;
        this.transistors = transistors;
    }

    equals(c: Cpu): boolean {
        return super.equals(c) && this.program_memory === c.program_memory && this.program_memory_units === c.program_memory_units && this.ram_memory === c.ram_memory && this.ram_memory_units === c.ram_memory_units
            && this.clockspeed === c.clockspeed && this.clockspeed_units === c.clockspeed_units && this.cpu_power === c.cpu_power && this.cpu_power_units === c.cpu_power_units && this.wordsize === c.wordsize && this.wordsize_units === c.wordsize_units
            && this.transistor_size === c.transistor_size && this.passmark === c.passmark && this.transistors === c.transistors;
    }
    
}
