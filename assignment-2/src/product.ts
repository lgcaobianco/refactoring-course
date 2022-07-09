import { Dimension } from "./dimension";
import { ProductInformation } from "./product-information";

export class Product {
    private price: number;
    private productInformation: ProductInformation;


    /**
     * 
     * @param price price of product
     * @param dimension dimensions in CM
     * @param weight KG 
     */
    constructor(dimension: Dimension, { price = 0, weight = 0 }) {
        if (price <= 0) {
            throw new Error("price cannot be invalid");
        }
        this.price = price;
        this.productInformation = new ProductInformation({ ...dimension, weight: weight });
    }

    getProductInformation(): ProductInformation {
        return this.productInformation;
    }
}