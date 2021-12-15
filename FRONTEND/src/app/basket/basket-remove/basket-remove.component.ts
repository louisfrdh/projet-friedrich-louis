import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from 'src/app/product';
import { BasketActions } from '../basket.actions';

@Component({
  selector: 'app-basket-remove',
  templateUrl: './basket-remove.component.html',
  styleUrls: ['./basket-remove.component.css']
})

export class BasketRemoveComponent{
  id: number = 0;
  @Input() product: Product;

  constructor(private store: Store) { }

  removeFromBasket() {
    this.store.dispatch(new BasketActions.RemoveProduct(this.product));
  }
}
