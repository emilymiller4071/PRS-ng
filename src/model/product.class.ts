import { Vendor } from "./vendor.class";

export class Product {
    id: number;
    partNbr: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;
    vendorID: number;
    vendor: Vendor;

    constructor(id: number, partNbr: string, name: string,
        price: number, unit: string, photoPath: string,
        vendorID: number, vendor: Vendor) {
            this.id = id;
            this.partNbr = partNbr;
            this.name = name;
            this.price = price;
            this.unit = unit;
            this.photoPath = photoPath;
            this.vendorID = vendorID;
            this.vendor = vendor;
        }
}