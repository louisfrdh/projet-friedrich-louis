import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private productService: ProductService) {  }

  products$: Observable<Array<Product>> = new Observable<Array<Product>>();
  teamFilter: string = "";

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

}
