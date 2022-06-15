import { of } from "rxjs";
import { Period } from "../../classes/period";

export class PeriodMock {

    public static periods: Period[] = [
            new Period('CPUs pre-x86','Intel originalmente fabricaba solo chips de memoria y se inició en la fabricación de CPUs con estos modelos.\nEstos chips no tienen memoria caché ni tiene sentido hablar de velocidad de bus.',
            'El 4004 formaba parte de la familia de chips MCS, que complementaban sus funciones.\nSus sucesores 4040, 8080 y 8085 tenían su propia familia de chips de soporte.',
            '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD', 1),
            new Period('8086 y 8088', 'En 1981 IBM quería crear su PC con CPUs Intel, pero a condición de que existiese un 2º productor de las mismas.\nPor ello, Intel y AMD hicieron un acuerdo de intercambio tecnológico de 10 años.',
                'CPUs x86, de 16 bits y primera generación.\nSe diseñaron para que portar programas de su antecesor (Intel 8080) fuera automático.',
                '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD',2)
        ];

    getPeriod(id) {
        return of(PeriodMock.periods[0]);
    }

    getAll() {
        return of(PeriodMock.periods);
    }

    addPeriod(p: Period) {
        if (PeriodMock.periods.filter(e => e.period_name == p.period_name).length > 0)
            return of({error: "error"});
        PeriodMock.periods.push(p);
        return of({next: "guardado"});
    }

    editPeriod(p: Period) {
        let editado = false;
        PeriodMock.periods.forEach((period, index) => {
            if (period.period_id == p.period_id) {
                PeriodMock.periods.splice(index, 1, p);
                editado = true;
            }
        });
        if (editado)
            return of({next: "guardado"});
        return of({error: "Error"});
    }

    deletePeriod(p: Period) {
        let borrado = false;
        PeriodMock.periods.forEach((period, index) => {
            if (period.period_id == p.period_id) {
                PeriodMock.periods.splice(index, 1);
                borrado = true;
            }
        });
        if (borrado)
            return of({next: "borrado"});
        return of({error: "Error"});
    }

    getPeriodByName(pName: string) {
        return of(PeriodMock.periods[0]);
    }

    static getPeriods() {
        return this.periods;
    }

    static resetPeriods() {
        this.periods = [
            new Period('CPUs pre-x86','Intel originalmente fabricaba solo chips de memoria y se inició en la fabricación de CPUs con estos modelos.\nEstos chips no tienen memoria caché ni tiene sentido hablar de velocidad de bus.',
            'El 4004 formaba parte de la familia de chips MCS, que complementaban sus funciones.\nSus sucesores 4040, 8080 y 8085 tenían su propia familia de chips de soporte.',
            '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD', 1),
            new Period('8086 y 8088', 'En 1981 IBM quería crear su PC con CPUs Intel, pero a condición de que existiese un 2º productor de las mismas.\nPor ello, Intel y AMD hicieron un acuerdo de intercambio tecnológico de 10 años.',
                'CPUs x86, de 16 bits y primera generación.\nSe diseñaron para que portar programas de su antecesor (Intel 8080) fuera automático.',
                '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD',2)
        ];
    }
}