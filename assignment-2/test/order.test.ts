import { Order } from "../src/order";
import { OrderItem } from "../src/order-item";
import { Product } from "../src/product";
import { CAMERA } from "./example-products";

describe("test order", () => {
    it("should calculate correct value for order", () => {
        const product = new Product(CAMERA);
        const orderItem = new OrderItem(product, 1);
        const order = new Order(orderItem);
        expect(order.getTotalOrder()).toEqual(20);
    });


    it("should calculate correct value for 2 products", () => {
        const product = new Product(CAMERA);
        const orderItem = new OrderItem(product, 1);
        const order = new Order(orderItem);
        order.addProduct(orderItem);
        expect(order.getTotalOrder()).toEqual(40);

    });
});