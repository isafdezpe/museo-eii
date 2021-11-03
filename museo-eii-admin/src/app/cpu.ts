import { Component } from "./comp";

export class Cpu implements Component{

    id: number;
    componentId: string;
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

    programMemory: string;
    ramMemory: string;
    clockSpeed: string;
    power: string;
    wordSize: string;
    process: string;
    passmark: string;
    transistors: number;
    performance: number;

    constructor(
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
    ){
        this.id = id;
        this.componentId = componentId;
        this.name = name;
        this.family = family;
        this.programMemory = programMemory;
        this.ramMemory = ramMemory;
        this.clockSpeed = clockSpeed;
        this.power = power;
        this.wordSize = wordSize;
        this.process = process;
        this.description = description;
        this.initYear = initYear;
        this.endYear = endYear;
        this.passmark = passmark;
        this.periodId = periodId;
        this.transistors = transistors;
        this.price = price;
        this.priceUnits = priceUnits;
        this.performance = performance;
        this.devices = devices;
        this.imgNames = imgNames;

    }
    
}

export enum CpuDevices {desktop='DESKTOP', portable='PORTABLE'}