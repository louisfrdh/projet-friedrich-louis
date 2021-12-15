import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';
import { Store } from '@ngxs/store';
import { BasketState } from '../basket.state';

@Component({
  selector: 'app-basket-details',
  templateUrl: './basket-details.component.html',
  styleUrls: ['./basket-details.component.css']
})
export class BasketDetailsComponent implements OnInit {
  @Select(BasketState.getProducts) products$: Observable<Product[]>|undefined;
  @Select(BasketState.getNbProducts) nbProducts$: Observable<Product[]>|undefined;

  constructor(private store: Store) { }

  ngOnInit(): void { }
}
