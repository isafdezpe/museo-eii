export interface MyComponent {
    component_id: number | undefined,
    component_name: string,
    component_family: string,
    component_description: string,
    component_year_init: number,
    component_year_end: number,
    component_period_id: number,
    component_price: number,
    component_price_units: string,
    component_devices: string,
    component_imgs: string[],
    famous_system: string,
    famous_system_img: string,
    component_type: CompTypes

    setDevices(devices: String[]): void;

    equals(c: MyComponent): boolean;
}

export enum CompDevices {desktop='DESKTOP', portable='PORTABLE'}

export enum CompTypes {cpu='CPU', generic='COMPONENT'}

export enum MemoryUnits { bit="b", byte="B", kilobyte="KB", megabyte="MB"}

export enum SpeedUnits {herz="Hz", kiloherz="KHz", megaherz="MHz"}

export enum PowerUnits {watios="W", kilowatios="KW", megawatios = "MW"}

export enum PriceUnits {euro="€", dolar="$"}

export class GenericComp implements MyComponent {

    component_id: number | undefined;
    component_name: string;
    component_family: string;
    component_description: string;
    component_year_init: number;
    component_year_end: number;
    component_period_id: number;
    component_price: number;
    component_price_units: string;
    component_devices: string;
    component_imgs: string[];
    famous_system: string;
    famous_system_img: string;
    component_type: CompTypes;

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
        this.component_id = id;
        this.component_name = name;
        this.component_family = family;
        this.component_description = description;
        this.component_year_init = initYear;
        this.component_year_end = endYear;
        this.component_period_id = periodId;
        this.component_price = price;
        this.component_price_units = priceUnits;
        this.component_devices = "" + ((devices && devices.length > 0) ? (devices[0] + ((devices.length == 2) ? ", " + devices[1] : "")) : "");
        this.component_imgs = [];
        imgNames.forEach((i) => this.component_imgs.push(i));
        this.famous_system = famousSystem;
        this.famous_system_img = famousSystemImg;
        this.component_type = type;
    }

    setDevices(devices: String[]) {
        this.component_devices = "" + ((devices && devices.length > 0) ? (devices[0] + ((devices.length == 2) ? ", " + devices[1] : "")) : "");
    }

    equals(c: MyComponent): boolean {
        let devicesEq: boolean;
        if (!(this.component_devices) && !(c.component_devices)) devicesEq = true; 
        else if (!(this.component_devices) || !(c.component_devices)) devicesEq = false; 
        else devicesEq = this.component_devices.split(',').length === c.component_devices.split(',').length;
        if (devicesEq && this.component_devices && c.component_devices) this.component_devices.split(',').forEach((e) => devicesEq = c.component_devices.split(',').includes(e));
        else if (this.component_devices && c.component_devices) return false;
        return this.component_name === c.component_name && this.component_family === c.component_family && this.component_description === c.component_description && this.component_year_init === c.component_year_init && this.component_year_end === c.component_year_end 
            && this.component_period_id === c.component_period_id && this.component_price === c.component_price && this.component_price_units === c.component_price_units && devicesEq;
    }

}

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
