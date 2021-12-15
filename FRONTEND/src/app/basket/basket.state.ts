import { Injectable } from "@angular/core";
import { Action, createSelector, Selector, State, StateContext} from "@ngxs/store";
import { Product } from "../product";
import { BasketActions } from "./basket.actions";
import { BasketStateModel } from "./basket.state.model";


@State<BasketStateModel>({
    name: 'basketProducts',
    defaults: {
        basketProducts: [],
    }
})

@Injectable()
export class BasketState {
	@Selector()
	static getProducts(state: BasketStateModel): Product[] {
		return state.basketProducts;
	}

    @Selector()
    static getNbProducts(state: BasketStateModel): number {
        return state.basketProducts.length;
    }

    @Action(BasketActions.AddProduct)
    add({getState, patchState}: StateContext<BasketStateModel>, {product}: BasketActions.AddProduct) {
        const state = getState();
        patchState({
            basketProducts: [ ...state.basketProducts, product ]
        })
    }

    @Action(BasketActions.RemoveProduct)
    remove({getState, patchState}: StateContext<BasketStateModel>, {product}: BasketActions.RemoveProduct) {
        const state = getState();
        let i = state.basketProducts.indexOf(product, 0);
        if (i >= 0) state.basketProducts.splice(i, 1)
        patchState({
            basketProducts: state.basketProducts
        })
    }
}