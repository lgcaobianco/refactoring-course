import { Product } from "../product";
import { ProductAdapter } from "./product-adapter";

export class CsvProductAdapter implements ProductAdapter {
    adaptProduct(convertFrom: any): Product {
        //"height,width,length,weight,price",
        const productLine = convertFrom[1].split(",")
        return new Product({
            height: productLine[0],
            width: productLine[1],
            length: productLine[2],
            weight: productLine[3],
            price: productLine[4],
        });
    }

}