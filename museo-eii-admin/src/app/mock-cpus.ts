import { Cpu } from "./cpu";
import { CompDevices } from "./comp";

export const CPUS: Cpu[] = [
 new Cpu(1, 'Intel 4004', 'Intel', 'Desarrollado para calculadoras de la marca Busicom, se instaló en máquinas de Pinball y fue candidato a instalarse en la nave espacial Pioneer 10. Existe una réplica funcional de 41x58cm en el Intel Museum de California.',
    1971, 1981, 1, 1800, '$', [CompDevices.desktop, CompDevices.portable], ['4004-1.jpg', '4004-2.jpg', '4004-3.jpg'], "Busicom 141PF", "Busicom 141PF.jpg", 
    4, 'KB', 640, 'bytes', 740, 'Khz', 0.45, 'W', 4, 'bits', 10000, 0.03, 2300
),
new Cpu( 2, 'Intel 8008', 'Intel', 'Sucesor de 8 bits del 4004. Creado para el ordenador DataPoint 2200, pero no usado por su bajo rendimiento. Usado en terminales, embotelladoras, robots y computadoras simples. Tenía un juego de instrucciones propio.',
    1972, 1983, 1, 120, '$', [CompDevices.desktop], ['8008-1.jpg', '8008-2.jpg', '8008-3.jpg'], "Busicom 141PF", "Busicom 141PF.jpg",
    16, 'KB', 0, '', 200, 'Khz', 1, 'W', 8, 'bits', 10000, 0.016, 3500,
),
new Cpu(3, 'Intel 4040', 'Intel', 'Uno de los dos sucesores del 4004 junto con el 8008, igualmente de 4 bits, pero que incorporaba nuevas instrucciones, registros y soporte para interrupciones hardware.',
    1974, 1981, 1, 200, '$', [CompDevices.desktop, CompDevices.portable], ['4040-1.jpg', '4040-2.jpg', '4040-3.jpg'], "Gottlieb Flying Carpet", "Gottlieb Flying Carpet.jpg",
    8, 'KB (ROM)', 640, 'bytes', 740, 'Khz',  0.6, 'W', 4, 'bits', 10000, 0.03, 3000
),
new Cpu(4, 'Intel 8086', 'Intel', 'Era de gran complejidad para su época, motivo por el cual tardó 2 años en producirse.',
    1978, 1999, 2, 86, '$', [CompDevices.desktop], ['8086-1.jpg', '8086-2.jpg', '8086-3.jpg'], "Datapoint 2200", "Datapoint 2200.jpg", 
    0, '', 1, 'MB', 10, 'Mhz', 1.7, 'W', 36, 'bits', 3000, 0.21, 29000
),
new Cpu(5, 'Intel 8088', 'Intel', 'CPU del IBM PC XT original de 1983.',
    1979, 1998, 2, 124, '$', [CompDevices.desktop], ['8088-1.jpg', '8088-2.jpg', '8088-3.jpg'], "Datapoint 2200", "Datapoint 2200.jpg",
    0, '', 1, 'MB', 10, 'Mhz', 1.87, 'W', 8, 'bits', 3000, 0.12, 29000
)
];