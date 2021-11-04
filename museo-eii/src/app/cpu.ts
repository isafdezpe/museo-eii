import { Component } from "./comp";

export interface Cpu extends Component{

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
   
    
}

export enum CpuDevices {desktop='DESKTOP', portable='PORTABLE'}