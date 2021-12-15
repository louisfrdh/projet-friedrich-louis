import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketDetailsComponent } from './basket-details/basket-details.component';
import { BasketAddComponent } from './basket-add/basket-add.component';
import { BasketRemoveComponent } from './basket-remove/basket-remove.component';

@NgModule({
  declarations: [
    BasketDetailsComponent,
    BasketAddComponent,
    BasketRemoveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasketModule { }
