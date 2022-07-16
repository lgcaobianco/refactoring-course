import { OrderItem } from "../src/order-item";
import { Product } from "../src/product";
import { CAMERA } from "./example-products";

describe("test order item", () => {
    it("should create order item with valid quantity", () => {
        const product = new Product(CAMERA);
        const orderItem = new OrderItem(product, 1);
        expect(orderItem).toBeInstanceOf(OrderItem);
    });

    it("should throw error with negative quantity", () => {
        const product = new Product(CAMERA);
        expect(() => new OrderItem(product, -1)).toThrowError("quantity cannot be invalid");
    });

    it("should throw error with quantity = 0", () => {
        const product = new Product(CAMERA);
        expect(() => new OrderItem(product, 0)).toThrowError("quantity cannot be invalid");
    });

    it("should calculate the correct item price for single item", () => {
        const product = new Product(CAMERA);
        const orderItem = new OrderItem(product, 1);
        expect(orderItem.getItemPrice()).toEqual(10);
    });

    it("should calculate the correct item price for mutiple items", () => {
        const product = new Product(CAMERA);
        const orderItem = new OrderItem(product, 5);
        expect(orderItem.getItemPrice()).toEqual(50);
    });
});
