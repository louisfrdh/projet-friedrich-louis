import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';
import { BasketActions } from '../basket.actions';
import { BasketState } from '../basket.state';

@Component({
  selector: 'app-basket-add',
  templateUrl: './basket-add.component.html',
  styleUrls: ['./basket-add.component.css']
})

export class BasketAddComponent{
  @Input() product: Product;

  constructor(private store: Store) { }

  addToBasket() {
    this.store.dispatch(new BasketActions.AddProduct(this.product));
  }
}
