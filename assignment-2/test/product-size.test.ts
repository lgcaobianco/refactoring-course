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
    })
});