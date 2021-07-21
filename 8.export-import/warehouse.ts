export type Product = {
    sku: string,
    name: string,
    description: string,
    price: number,
    photoUrl: string,
}

type Warehouse = {
    [sku: string]: {
        stock: number,
        lastDelivery: Date,
    }
}

function computeStock(w: Warehouse) {

}

export function totalSum(products: Product[]) {
    computeStock({})
    let price = 0;
    for (let product of products) {
        price += product.price
    }
    return price;
}