export class Product {
    private height: number;
    private width: number;
    private length: number;
    private weight: number;
    private price: number;

    /**
     * 
     * @param price price of product
     * @param dimension dimensions in CM
     * @param weight KG 
     */
    constructor({ height = 0, width = 0, length = 0, weight = 0, price = 0 }) {
        if (height <= 0 || width <= 0 || length <= 0 || weight <= 0 || price <= 0) {
            throw new Error("Invalid dimensions")
        }
        this.height = height;
        this.width = width;
        this.length = length;
        this.weight = weight;
        this.price = price;
    }

    getVolume(): number {
        return (this.height * this.length * this.width) * (10 ** -6);
    }

    getDensity(): number {
        return this.weight / this.getVolume();
    }
}