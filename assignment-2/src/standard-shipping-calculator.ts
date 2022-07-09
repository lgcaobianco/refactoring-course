import { Product } from "./product";
import { ShipmentCalculator } from "./shipment-calculator.interface";

export class StandardShippingCalculator implements ShipmentCalculator {
    private MIN_SHIPMENT_FEE = 10;
    private distance: number;
    private product: Product;

    constructor(distance: number, product: Product) {
        if (distance <= 0) {
            throw new Error("invalid distance");
        }
        this.distance = distance;
        this.product = product;
    }


    public getShippingFee(): number {
        return Math.max(this.MIN_SHIPMENT_FEE, this.distance * this.product.volume * this.product.density / 100);
    }


}