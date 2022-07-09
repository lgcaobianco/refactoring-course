import { Dimension } from "./dimension";
import { Size } from "./size";

export class Product {
    private price: number;
    private size: Size;


    constructor(price: number, dimension: Dimension) {
        this.price = price;
        this.size = new Size({ ...dimension });
    }





}