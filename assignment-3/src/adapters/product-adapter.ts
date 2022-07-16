import { Product } from "../product";

export interface ProductAdapter {
    adaptProduct(convertFrom: any): Product
}