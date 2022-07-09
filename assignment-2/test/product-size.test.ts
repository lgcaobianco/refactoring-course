import { Dimension } from "../src/dimension";
import { Product } from "../src/product";

describe('test products sizes', () => {
    it('should throw error when lenght is negative', () => {
        const dimensions = {
            width: 10,
            height: -5,
            length: 10
        } as Dimension;
        expect(() => new Product(dimensions, {
            price: 10,
            weight: 10
        })).toThrowError("Invalid dimensions")
    });

    it('should create a new product if dimension is valid', () => {
        const dimensions = {
            width: 10,
            height: 10,
            length: 10
        };
        const product = new Product(dimensions, {
            price: 10,
            weight: 10
        });
        expect(product).toBeInstanceOf(Product);
    });

    it('should obtain correct value for volume in cubic meters', () => {
        const expectedVolume = 1;
        const dimensions = {
            width: 100,
            height: 200,
            length: 50
        }
        const product = new Product(dimensions, {
            price: 10,
            weight: 10
        });
        expect(product.getProductInformation().getVolume()).toEqual(expectedVolume);
    });

    it('should obtain correct value for density', () => {
        const dimensions = {
            width: 100,
            height: 200,
            length: 100
        }
        const volume = 2;
        const weight = 30
        const product = new Product(dimensions, {
            price: 10,
            weight
        });
        expect(product.getProductInformation().getDensity()).toEqual(weight / volume);
    });

});