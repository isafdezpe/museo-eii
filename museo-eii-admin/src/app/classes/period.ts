export class Period {

    period_id: number;
    period_name: string;
    period_trivia: string;
    period_details: string;
    period_events: string;
    famousSystems: {name: string, img: string, sysName: string}[];

    constructor(
        name: string,
        trivia: string,
        details: string,
        events: string,
        
        id?: number,
    ){
        this.period_id = id;
        this.period_name = name;
        this.period_trivia = trivia;
        this.period_details = details;
        this.period_events = events;
        
    }

    equals(p: Period): boolean {
        return this.period_name === p.period_name && this.period_trivia === p.period_trivia && this.period_details === p.period_details && this.period_events === p.period_events;
    }

}