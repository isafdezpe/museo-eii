export class Period {

    id: number;
    name: string;
    trivia: string[];
    details: string[];
    events: string[];
    famousSystems: {name: string, img: string, sysName: string}[];

    constructor(
        name: string,
        trivia: string[],
        details: string[],
        events: string[],
        famousSystems: {name: string, img: string, sysName: string}[],
        
        id?: number,
    ){
        this.id = id;
        this.name = name;
        this.trivia = trivia;
        this.details = details;
        this.events = events;
        this.famousSystems = famousSystems;
    }

}