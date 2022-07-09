import { Product } from "./product";
import { StandardShippingCalculator } from "./standard-shipping-calculator";

export class OrderItem {
    private product: Product;
    private quantity: number;

    constructor(product: Product, quantity: number) {
        if (quantity <= 0) {
            throw new Error("quantity cannot be invalid");
        }
        this.product = product;
        this.quantity = quantity;
    }

    getItemPrice(): number {
        return this.quantity * this.product.getPrice;
    }


    public getShippingFee(distance = 1000): number {
        const shippingCalculator = new StandardShippingCalculator(distance, this.product);
        return shippingCalculator.getShippingFee();
    }


    public get getProduct(): Product {
        return this.product;
    }


}