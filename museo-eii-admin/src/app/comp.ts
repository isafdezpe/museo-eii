export interface Component {
    id: number,
    componentId: string,
    name: string,
    family: string,
    description: string,
    initYear: number,
    endYear: number,
    periodId: number,
    price: number,
    priceUnits: string,
    devices: string[],
    imgNames: string[]
}