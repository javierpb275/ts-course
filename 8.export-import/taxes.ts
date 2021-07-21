import * as product from "./warehouse2";

export default function IVA(price: number) {
    return price * 1.21;
}

export type Price = number;
export type Tax = number;

//product.Product3