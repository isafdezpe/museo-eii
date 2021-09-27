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
    years: string,
    passmark: string,
    periodId: number,
    transistors: number,
    price: string,
    performance: number,
    devices: string[]
}

export enum CpuDevices {desktop='DESKTOP', portable='PORTABLE'}