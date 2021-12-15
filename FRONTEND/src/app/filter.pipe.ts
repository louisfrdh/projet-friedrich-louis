import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(observableProducts: Observable<Product[]>, filter: string): Observable<Product[]> {
    let filteredObservableProducts: Observable<Product[]> = observableProducts.pipe( map((products: Array<Product>) => products.filter(product => product.team.toLowerCase().indexOf(filter) > -1)) );
    return !filter ? observableProducts : filteredObservableProducts;
  }
}
