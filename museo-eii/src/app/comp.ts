export interface Component {
    id: number,
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

export enum CompDevices {desktop='DESKTOP', portable='PORTABLE'}