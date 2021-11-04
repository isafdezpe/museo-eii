export interface Period {

        id: number,
        name: string,
        trivia: string[],
        details: string[],
        events: string[],
        famousSystems: {name: string, img: string, sysName: string}[]
}