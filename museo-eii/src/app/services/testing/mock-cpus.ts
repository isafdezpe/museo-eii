import { of } from "rxjs";
import { CompDevices, Cpu, MemoryUnits, MyComponent, PowerUnits, PriceUnits, SpeedUnits } from "../../classes/comp";

export class ComponentMock {

    comps: Cpu[] = [
        new Cpu('Intel 4004', 'Intel', 'Desarrollado para calculadoras de la marca Busicom, se instaló en máquinas de Pinball y fue candidato a instalarse en la nave espacial Pioneer 10. Existe una réplica funcional de 41x58cm en el Intel Museum de California.',
            1971, 1981, 1, 1800, PriceUnits.dolar, [CompDevices.desktop, CompDevices.portable], ['4004-1.jpeg', '4004-2.jpeg', '4004-3.jpeg'], "Busicom 141PF", "Busicom 141PF.jpeg", 
            4, MemoryUnits.kilobyte, 640, MemoryUnits.byte, 740, SpeedUnits.kiloherz, 0.45, PowerUnits.watios, 4, MemoryUnits.bit, 10000, 0.03, 2300, 1
        ),
        new Cpu('Intel 8008', 'Intel', 'Sucesor de 8 bits del 4004. Creado para el ordenador DataPoint 2200, pero no usado por su bajo rendimiento. Usado en terminales, embotelladoras, robots y computadoras simples. Tenía un juego de instrucciones propio.',
            1972, 1983, 1, 120, PriceUnits.dolar, [CompDevices.desktop], ['8008-1.jpeg', '8008-2.jpeg', '8008-3.jpeg'], "Datapoint 2200", "Datapoint 2200.jpeg",
            16, MemoryUnits.kilobyte, 0, null, 200, SpeedUnits.kiloherz, 1, PowerUnits.watios, 8, MemoryUnits.bit, 10000, 0.016, 3500, 2
        ),
        new Cpu('Intel 4040', 'Intel', 'Uno de los dos sucesores del 4004 junto con el 8008, igualmente de 4 bits, pero que incorporaba nuevas instrucciones, registros y soporte para interrupciones hardware.',
            1974, 1981, 1, 200, PriceUnits.dolar, [CompDevices.desktop, CompDevices.portable], ['4040-1.jpeg', '4040-2.jpeg', '4040-3.jpeg'], "Gottlieb Flying Carpet", "Gottlieb Flying Carpet.jpeg",
            8, MemoryUnits.kilobyte, 640, MemoryUnits.byte, 740, SpeedUnits.kiloherz,  0.6, PowerUnits.watios, 4, MemoryUnits.bit, 10000, 0.03, 3000, 3
        ),
        new Cpu('Intel 8086', 'Intel', 'Era de gran complejidad para su época, motivo por el cual tardó 2 años en producirse.',
            1978, 1999, 2, 86, PriceUnits.dolar, [CompDevices.desktop], ['8086-1.jpeg', '8086-2.jpeg', '8086-3.jpeg'], "Busicom 141PF", "Busicom 141PF.jpeg", 
            0, null, 1, MemoryUnits.megabyte, 10, SpeedUnits.megaherz, 1.7, PowerUnits.watios, 36, MemoryUnits.bit, 3000, 0.21, 29000, 4
        ),
        new Cpu('Intel 8088', 'Intel', 'CPU del IBM PC XT original de 1983.',
            1979, 1998, 2, 124, PriceUnits.dolar, [CompDevices.desktop], ['8088-1.jpeg', '8088-2.jpeg', '8088-3.jpeg'], "Datapoint 2200", "Datapoint 2200.jpeg",
            0, null, 1, MemoryUnits.megabyte, 10, SpeedUnits.megaherz, 1.87, PowerUnits.watios, 8, MemoryUnits.bit, 3000, 0.12, 29000, 5
        )
    ];

    getComponent(id) {
        return of(this.comps[0]);
    }

    getComponentImgs(id) {
        return of([{image: "imagen1.jpeg"}, {image: "imagen2.jpeg"}]);
    }

    getComponentsFromPeriod(id) {
        return of(this.comps.filter((e) => e.component_period_id == 1));
    }
}
