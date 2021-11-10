export interface MyComponent {
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
    imgNames: string[],
    famousSystem: string,
    famousSystemImgName: string
}

export enum CompDevices {desktop='DESKTOP', portable='PORTABLE'}

export enum CompTypes {cpu='CPU', gpu='GPUs'}