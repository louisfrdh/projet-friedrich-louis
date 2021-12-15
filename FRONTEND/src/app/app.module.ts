import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountFormSummaryComponent } from './account-form-summary/account-form-summary.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { BasketState } from './basket/basket.state';
import { BasketDetailsComponent } from './basket/basket-details/basket-details.component';
import { BasketAddComponent } from './basket/basket-add/basket-add.component';
import { BasketRemoveComponent } from './basket/basket-remove/basket-remove.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  {path: 'client', component: AccountFormComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'basket', component: BasketDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AccountFormComponent,
    AccountFormSummaryComponent,
    TetiereComponent,
    CatalogComponent,
    FilterPipe,
    BasketDetailsComponent,
    BasketAddComponent,
    BasketRemoveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([]),
    NgxsModule.forFeature([BasketState]),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
