import { Period } from "./period";


describe('Period', () => {
  it('should create an instance', () => {
    expect(new Period('8086 y 8088', 'En 1981 IBM quería crear su PC con CPUs Intel, pero a condición de que existiese un 2º productor de las mismas.\nPor ello, Intel y AMD hicieron un acuerdo de intercambio tecnológico de 10 años.',
    'CPUs x86, de 16 bits y primera generación.\nSe diseñaron para que portar programas de su antecesor (Intel 8080) fuera automático.',
    '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD',2)).toBeTruthy();
  });

  it('should check if period is equal', () => {
    let period = new Period('8086 y 8088', 'En 1981 IBM quería crear su PC con CPUs Intel, pero a condición de que existiese un 2º productor de las mismas.\nPor ello, Intel y AMD hicieron un acuerdo de intercambio tecnológico de 10 años.',
        'CPUs x86, de 16 bits y primera generación.\nSe diseñaron para que portar programas de su antecesor (Intel 8080) fuera automático.',
        '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD',2);
    expect(period.equals(new Period('8086 y 8088', 'En 1981 IBM quería crear su PC con CPUs Intel, pero a condición de que existiese un 2º productor de las mismas.\nPor ello, Intel y AMD hicieron un acuerdo de intercambio tecnológico de 10 años.',
        'CPUs x86, de 16 bits y primera generación.\nSe diseñaron para que portar programas de su antecesor (Intel 8080) fuera automático.',
        '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD',2))).toBeTruthy();
    expect(period.equals(new Period('CPUs pre-x86','Intel originalmente fabricaba solo chips de memoria y se inició en la fabricación de CPUs con estos modelos.\nEstos chips no tienen memoria caché ni tiene sentido hablar de velocidad de bus.',
        'El 4004 formaba parte de la familia de chips MCS, que complementaban sus funciones.\nSus sucesores 4040, 8080 y 8085 tenían su propia familia de chips de soporte.',
        '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD', 1))).toBeFalsy();
  });
});
