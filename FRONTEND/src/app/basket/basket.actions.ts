import { Product } from "../product";

export namespace BasketActions {
    export class AddProduct {
        static readonly type = '[Product] Add to basket';
        constructor (public product: Product){}
    }

    export class RemoveProduct {
        static readonly type = '[Product] Remove from basket';
        constructor (public product: Product){}
    }
}