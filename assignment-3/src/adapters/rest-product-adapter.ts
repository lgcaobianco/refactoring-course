import { Request } from "express";
import { Product } from "../product";
import { ProductAdapter } from "./product-adapter";

export class RestProductAdapter implements ProductAdapter {
    adaptProduct(convertFrom: any): Product {
        return new Product({
            ...convertFrom.product
        });
    }

}