import { Dimension } from "./dimension";
import { Size } from "./size";

export class Product {
    private price: number;
    private size: Size;


    /**
     * 
     * @param price price of product
     * @param dimension dimensions in CM
     */
    constructor(price: number, dimension: Dimension) {
        this.price = price;
        this.size = new Size({ ...dimension });
    }


    getVolumeInCubicMeter() {
        return this.size.getVolume();
    }
}