import { Product } from "../src/product";
import { StandardShippingCalculator } from "../src/standard-shipping-calculator";
import { CAMERA, FRIDGE, GUITAR } from "./example-products";

describe("test shipping calculator", () => {
    it("should throw error if distance is negative", () => {
        const product = new Product(CAMERA);
        expect(() => new StandardShippingCalculator(-10, product)).toThrowError("invalid distance");
    });


    const testProducts = [CAMERA, GUITAR, FRIDGE];

    testProducts.forEach(testProduct => {
        it(`product ${testProduct.name} should calculate the right shipment fee`, () => {
            const product = new Product(testProduct);
            const shipmentCalculator = new StandardShippingCalculator(1000, product);
            expect(shipmentCalculator.getShippingFee()).toEqual(testProduct.expectedShipmentFee);
        });

    });


});