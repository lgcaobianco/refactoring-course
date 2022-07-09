import { Dimension } from "./dimension";

export class ProductInformation {
    private dimension: Dimension;
    private volume: number;
    private weight: number;
    private density: number

    constructor({ height = 0, width = 0, length = 0, weight = 0 }) {
        if (height <= 0 || width <= 0 || length <= 0 || weight <= 0) {
            throw new Error("Invalid dimensions")
        }
        this.dimension = { height, width, length }
        this.weight = weight;
        this.volume = this.getVolume();
        this.density = this.getDensity();
    }


    getVolume(): number {
        return this.volume || (this.dimension.height * this.dimension.length * this.dimension.width) * (10 ** -6);
    }

    getDensity(): number {
        return this.density || this.weight / this.getVolume();
    }
}
