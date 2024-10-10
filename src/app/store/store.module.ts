import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ListComponent } from './StoreListComponent/list/list.component';
import { CartItemComponent } from './CartItemComponent/cart-item/cart-item.component';
import { CartComponent } from './CartListComponent/cart/cart.component';
import { TotalComponent } from './TotalComponent/total/total.component'

@NgModule({ 
    declarations: [
    ListComponent,
    CartItemComponent,
    CartComponent,
    TotalComponent
  ],
    exports: [ListComponent, CartComponent, TotalComponent], 
    imports: [CommonModule, FormsModule], 
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class StoreModule {}
