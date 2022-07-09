import { Product } from "./product";

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
}