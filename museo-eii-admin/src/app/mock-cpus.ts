import { Cpu, CpuDevices } from "./cpu";

export const CPUS: Cpu[] = [
 {
    id: 1,
    name: 'Intel 4004',
    family: 'Intel',
    programMemory: 4,
    programMemoryUnits: 'KB',
    ramMemory: 640,
    ramMemoryUnits: 'bytes',
    clockSpeed: 740,
    clockSpeedUnits: 'Khz',
    power: 0.45,
    powerUnits: 'W',
    wordSize: 4,
    wordSizeUnits: 'bits',
    transistorSize: 10000,
    transistorSizeUnits: 'nm',
    description: 'Desarrollado para calculadoras de la marca Busicom, se instaló en máquinas de Pinball y fue candidato a instalarse en la nave espacial Pioneer 10. Existe una réplica funcional de 41x58cm en el Intel Museum de California.',
    initYear: 1971,
    endYear: 1981,
    passmark: 0.03,
    periodId: 1,
    transistors: 2300,
    price: 1800,
    priceUnits: '$',
    devices: [CpuDevices.desktop, CpuDevices.portable],
    imgNames: ['4004-1.jpg', '4004-2.jpg', '4004-3.jpg']
},
 {
    id: 2,
    name: 'Intel 8008',
    family: 'Intel',
    programMemory: 16,
    programMemoryUnits: 'KB',
    ramMemory: 0,
    ramMemoryUnits: '',
    clockSpeed: 200,
    clockSpeedUnits: 'Khz',
    power: 1,
    powerUnits: 'W',
    wordSize: 8,
    wordSizeUnits: 'bits',
    transistorSize: 10000,
    transistorSizeUnits: 'nm',
    description: 'Sucesor de 8 bits del 4004. Creado para el ordenador DataPoint 2200, pero no usado por su bajo rendimiento. Usado en terminales, embotelladoras, robots y computadoras simples. Tenía un juego de instrucciones propio.',
    initYear: 1972,
    endYear: 1983,
    passmark: 0.016,
    periodId: 1,
    transistors: 3500,
    price: 120,
    priceUnits: '$',
    devices: [CpuDevices.desktop],
    imgNames: ['8008-1.jpg', '8008-2.jpg', '8008-3.jpg']
},
 {
    id: 3,
    name: 'Intel 4040',
    family: 'Intel',
    programMemory: 8,
    programMemoryUnits: 'KB (ROM)',
    ramMemory: 640,
    ramMemoryUnits: 'bytes',
    clockSpeed: 740,
    clockSpeedUnits: 'Khz',
    power: 0.6,
    powerUnits: 'W',
    wordSize: 4,
    wordSizeUnits: 'bits',
    transistorSize: 10000,
    transistorSizeUnits: 'nm',
    description: 'Uno de los dos sucesores del 4004 junto con el 8008, igualmente de 4 bits, pero que incorporaba nuevas instrucciones, registros y soporte para interrupciones hardware.',
    initYear: 1974,
    endYear: 1981,
    passmark: 0.03,
    periodId: 1,
    transistors: 3000,
    price: 200,
    priceUnits: '$',
    devices: [CpuDevices.desktop, CpuDevices.portable],
    imgNames: ['4040-1.jpg', '4040-2.jpg', '4040-3.jpg']
},
{
    id: 4,
    name: 'Intel 8086',
    family: 'Intel',
    programMemory: 0,
    programMemoryUnits: '',
    ramMemory: 1,
    ramMemoryUnits: 'MB',
    clockSpeed: 10,
    clockSpeedUnits: 'Mhz',
    power: 1.7,
    powerUnits: 'W',
    wordSize: 36,
    wordSizeUnits: 'bits',
    transistorSize: 3000,
    transistorSizeUnits: 'nm',
    description: 'Era de gran complejidad para su época, motivo por el cual tardó 2 años en producirse.',
    initYear: 1978,
    endYear: 1999,
    passmark: 0.21,
    periodId: 2,
    transistors: 29000,
    price: 86,
    priceUnits: '$',
    devices: [CpuDevices.desktop],
    imgNames: ['8086-1.jpg', '8086-2.jpg', '8086-3.jpg']
},
{
    id: 5,
    name: 'Intel 8088',
    family: 'Intel',
    programMemory: 0,
    programMemoryUnits: '',
    ramMemory: 1,
    ramMemoryUnits: 'MB',
    clockSpeed: 10,
    clockSpeedUnits: 'Mhz',
    power: 1.87,
    powerUnits: 'W',
    wordSize: 8,
    wordSizeUnits: 'bits',
    transistorSize: 3000,
    transistorSizeUnits: 'nm',
    description: 'CPU del IBM PC XT original de 1983.',
    initYear: 1979,
    endYear: 1998,
    passmark: 0.12,
    periodId: 2,
    transistors: 29000,
    price: 124,
    priceUnits: '$',
    devices: [CpuDevices.desktop],
    imgNames: ['8088-1.jpg', '8088-2.jpg', '8088-3.jpg']
}
];