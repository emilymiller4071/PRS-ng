import { Vendor } from "./vendor.class";

export class Product {
    id: number;
    partNbr: string;
    name: string;
    price: number;
    unit: string;
    photoPath?: string;
    vendor!: Vendor;

    constructor(id: number = 0, partNbr: string = "", name: string = "",
        price: number = 0, unit: string = "", photoPath: string = "",
         vendor: Vendor ) {
            this.id = id;
            this.partNbr = partNbr;
            this.name = name;
            this.price = price;
            this.unit = unit;
            this.photoPath = photoPath;
            this.vendor = vendor;
        }
}