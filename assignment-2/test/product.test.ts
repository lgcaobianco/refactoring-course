import { Product } from "../src/product";
import { CAMERA, FRIDGE, GUITAR } from "./example-products";

describe('test product', () => {
    const testProducts = [CAMERA, GUITAR, FRIDGE];

    it('should throw error when lenght is negative', () => {
        const dimensions = {
            width: 10,
            height: -5,
            length: 10,
            price: 10,
            weight: 10
        };
        expect(() => new Product(dimensions)).toThrowError("Invalid dimensions");
    });

    testProducts.forEach(testProduct => {
        it(`product ${testProduct.name} should be created`, () => {
            const product = new Product({ ...testProduct });
            expect(product).toBeInstanceOf(Product);
        });

        it(`product ${testProduct.name} should have correct volume`, () => {
            const product = new Product({ ...testProduct });
            expect(product.volume).toEqual(testProduct.expectedVolume);
        });

        it(`product ${testProduct.name} should have correct density`, () => {
            const product = new Product({ ...testProduct });
            expect(product.density).toEqual(testProduct.weight / testProduct.expectedVolume);
        });

    });
});