import { of } from "rxjs";
import { Period } from "./period";

export class PeriodMock {

    periods: Period[] = [
            new Period('CPUs pre-x86','Intel originalmente fabricaba solo chips de memoria y se inició en la fabricación de CPUs con estos modelos.\nEstos chips no tienen memoria caché ni tiene sentido hablar de velocidad de bus.',
            'El 4004 formaba parte de la familia de chips MCS, que complementaban sus funciones.\nSus sucesores 4040, 8080 y 8085 tenían su propia familia de chips de soporte.',
            '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD', 1),
            new Period('8086 y 8088', 'En 1981 IBM quería crear su PC con CPUs Intel, pero a condición de que existiese un 2º productor de las mismas.\nPor ello, Intel y AMD hicieron un acuerdo de intercambio tecnológico de 10 años.',
                'CPUs x86, de 16 bits y primera generación.\nSe diseñaron para que portar programas de su antecesor (Intel 8080) fuera automático.',
                '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD',2)
        ];

    getPeriod(id) {
        return of(this.periods[0]);
    }

    getPeriods() {
        return of(this.periods);
    }

    getYearsPeriod(id) {
        return of({year_init: 1971, year_end: 1983})
    }
}

// export const PERIODS: Period[] = [
//     {
//         id: 1,
//         name: 'CPUs pre-x86',
//         trivia: ['Intel originalmente fabricaba solo chips de memoria y se inició en la fabricación de CPUs con estos modelos.', 'Estos chips no tienen memoria caché ni tiene sentido hablar de velocidad de bus.'],
//         details: ['El 4004 formaba parte de la familia de chips MCS, que complementaban sus funciones.', 'Sus sucesores 4040, 8080 y 8085 tenían su propia familia de chips de soporte.'],
//         events: ['1970: Apollo 13', '1971: email', '1971: Floppy, pantallas LCD'],
//         famousSystems: [{name: "4004", img: "Busicom 141PF.jpg", sysName: "Busicom 141PF"},  {name: "8008", img: "Datapoint 2200.jpg", sysName: "Datapoint 2200"}, {name: "4040", img: "Gottlieb Flying Carpet.jpg", sysName:"Gottlieb Flying Carpet"}]
//     },
//     {
//         id: 2,
//         name: '8086 y 8088',
//         trivia: ['En 1981 IBM quería crear su PC con CPUs Intel, pero a condición de que existiese un 2º productor de las mismas.', 'Por ello, Intel y AMD hicieron un acuerdo de intercambio tecnológico de 10 años.'],
//         details: ['CPUs x86, de 16 bits y primera generación.', 'Se diseñaron para que portar programas de su antecesor (Intel 8080) fuera automático.'],
//         events: ['1970: Apollo 13', '1971: email', '1971: Floppy, pantallas LCD'],
//         famousSystems: [{name: "4004", img: "Busicom 141PF.jpg", sysName: "Busicom 141PF"},  {name: "8008", img: "Datapoint 2200.jpg", sysName: "Datapoint 2200"}]
//     }
// ];