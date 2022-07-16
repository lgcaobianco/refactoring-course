import { OrderItem } from "./order-item";

export class Order {
    private orderItems: OrderItem[];

    constructor(orderItem: OrderItem) {
        this.orderItems = [orderItem];
    }

    addProduct(orderItem: OrderItem) {
        this.orderItems.push(orderItem);
    }

    getTotalOrder(): number {
        return this.orderItems
            .map(orderItem => orderItem.getShippingFee() + orderItem.getItemPrice())
            .reduce((a, b) => a + b, 0);
    }
}