import { Dimension } from "../src/dimension";
import { Product } from "../src/product";
import { Size } from "../src/size";

describe('test products sizes', () => {
    it('should throw error when lenght is negative', () => {
        const dimensions = {
            width: 10,
            height: -5,
            length: 10
        } as Dimension;
        expect(() => new Product(25.59, dimensions)).toThrowError("Invalid dimensions")
    });

    it('should create a new product if dimension is valid', () => {
        const dimensions = {
            width: 10,
            height: 10,
            length: 10
        };
        const product = new Product(10, dimensions);
        expect(product).toBeInstanceOf(Product);
    });

    it('should obtain right value for volume in cubic meters', () => {
        const expectedVolume = 1;
        const dimensions = {
            width: 100,
            height: 200,
            length: 50
        }
        const product = new Product(10, dimensions);
        expect(product.getVolumeInCubicMeter()).toEqual(expectedVolume);
    })

});