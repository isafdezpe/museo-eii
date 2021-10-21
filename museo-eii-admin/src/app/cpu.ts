export interface Cpu {
    id: number,
    componentId: string,
    name: string,
    family: string,
    programMemory: string,
    ramMemory: string,
    clockSpeed: string,
    power: string,
    wordSize: string,
    process: string,
    description: string,
    initYear: number,
    endYear: number,
    passmark: string,
    periodId: number,
    transistors: number,
    price: number,
    priceUnits: string,
    performance: number,
    devices: string[],
    imgNames: string[]
}

export enum CpuDevices {desktop='DESKTOP', portable='PORTABLE'}