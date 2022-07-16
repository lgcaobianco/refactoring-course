import { Request, Response } from "express";
import { PRODUCT_CSV } from "./product-example-in-csv";
import { CsvProductAdapter } from "./src/adapters/csv-product-adapter";
import { ProductAdapter } from "./src/adapters/product-adapter";
import { RestProductAdapter } from "./src/adapters/rest-product-adapter";
import { Order } from "./src/order";
import { OrderItem } from "./src/order-item";

const express = require('express')
const app = express();

app.use(express.json())

app.get('/add-product', (req: Request, res: Response) => {
    console.log(req.body);
    const adapter: ProductAdapter = new RestProductAdapter();
    const quantity = req.body.quantity;
    const orderItem = new OrderItem(adapter.adaptProduct(req.body), quantity);
    const order = new Order(orderItem);
    res.send({ "totalOrder": order.getTotalOrder() });
});

app.get('/add-from-csv', (req: Request, res: Response) => {
    const adapter: ProductAdapter = new CsvProductAdapter();
    const exampleProduct = PRODUCT_CSV;
    const orderItem = new OrderItem(adapter.adaptProduct(exampleProduct), 1);
    const order = new Order(orderItem);
    res.send({ "totalOrder": order.getTotalOrder() })
});


app.listen(3000, () => {
    console.log("server running on port 3000");
})