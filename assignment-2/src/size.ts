import { Dimension } from "./dimension";

export class Size {
    private dimension: Dimension;

    constructor({ height = 0, width = 0, length = 0 }) {
        if (height <= 0 || width <= 0 || length <= 0) {
            throw new Error("Invalid dimensions")
        }

        this.dimension = { height, width, length }
    }


    getVolume(): number {
        return (this.dimension.height * this.dimension.length * this.dimension.width) * (10 ** -6);
    }
}
