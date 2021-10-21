import { Cpu, CpuDevices } from "./cpu";

export const CPUS: Cpu[] = [
 {
    id: 1,
    componentId: 'CPU1',
    name: 'Intel 4004',
    family: 'Intel',
    programMemory: '4KB (ROM)',
    ramMemory: '640 bytes',
    clockSpeed: '740Khz',
    power: '0.45W',
    wordSize: '4 bits',
    process: '10000nm',
    description: 'Desarrollado para calculadoras de la marca Busicom, se instaló en máquinas de Pinball y fue candidato a instalarse en la nave espacial Pioneer 10. Existe una réplica funcional de 41x58cm en el Intel Museum de California.',
    initYear: 1971,
    endYear: 1981,
    passmark: '1/1 C/T',
    periodId: 1,
    transistors: 2300,
    price: 1800,
    priceUnits: '$',
    performance: 0.03,
    devices: [CpuDevices.desktop, CpuDevices.portable],
    imgNames: ['4004-1.jpg', '4004-2.jpg', '4004-3.jpg']
},
 {
    id: 2,
    componentId: 'CPU2',
    name: 'Intel 8008',
    family: 'Intel',
    programMemory: '16KB (ROM)',
    ramMemory: '',
    clockSpeed: '200-800Khz',
    power: '1W',
    wordSize: '8 bits',
    process: '10000nm',
    description: 'Sucesor de 8 bits del 4004. Creado para el ordenador DataPoint 2200, pero no usado por su bajo rendimiento. Usado en terminales, embotelladoras, robots y computadoras simples. Tenía un juego de instrucciones propio.',
    initYear: 1972,
    endYear: 1983,
    passmark: '1/1 C/T',
    periodId: 1,
    transistors: 3500,
    price: 120,
    priceUnits: '$',
    performance: 0.016,
    devices: [CpuDevices.desktop],
    imgNames: ['8008-1.jpg', '8008-2.jpg', '8008-3.jpg']
},
 {
    id: 3,
    componentId: 'CPU3',
    name: 'Intel 4040',
    family: 'Intel',
    programMemory: '8KB (ROM)',
    ramMemory: '640 bytes',
    clockSpeed: '500-740Khz',
    power: '0.6W',
    wordSize: '4 bits',
    process: '10000nm',
    description: 'Uno de los dos sucesores del 4004 junto con el 8008, igualmente de 4 bits, pero que incorporaba nuevas instrucciones, registros y soporte para interrupciones hardware.',
    initYear: 1974,
    endYear: 1981,
    passmark: '1/1 C/T',
    periodId: 1,
    transistors: 3000,
    price: 200,
    priceUnits: '$',
    performance: 0.03,
    devices: [CpuDevices.desktop, CpuDevices.portable],
    imgNames: ['4040-1.jpg', '4040-2.jpg', '4040-3.jpg']
},
{
    id: 4,
    componentId: 'CPU4',
    name: 'Intel 8086',
    family: 'Intel',
    programMemory: '',
    ramMemory: '1MB',
    clockSpeed: '5-10Mhz',
    power: '1.7W',
    wordSize: '36 bits',
    process: '3000nm',
    description: 'Era de gran complejidad para su época, motivo por el cual tardó 2 años en producirse.',
    initYear: 1978,
    endYear: 1999,
    passmark: '1/1 C/T',
    periodId: 2,
    transistors: 29000,
    price: 86,
    priceUnits: '$',
    performance: 0.21,
    devices: [CpuDevices.desktop],
    imgNames: ['8086-1.jpg', '8086-2.jpg', '8086-3.jpg']
},
{
    id: 5,
    componentId: 'CPU5',
    name: 'Intel 8088',
    family: 'Intel',
    programMemory: '',
    ramMemory: '1MB',
    clockSpeed: '4.77-10Mhz',
    power: '1.87W',
    wordSize: '8 bits',
    process: '3000nm',
    description: 'CPU del IBM PC XT original de 1983.',
    initYear: 1979,
    endYear: 1998,
    passmark: '1/1 C/T',
    periodId: 2,
    transistors: 29000,
    price: 124,
    priceUnits: '$',
    performance: 0.12,
    devices: [CpuDevices.desktop],
    imgNames: ['8088-1.jpg', '8088-2.jpg', '8088-3.jpg']
}
];