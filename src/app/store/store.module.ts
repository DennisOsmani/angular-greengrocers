import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ListComponent } from './StoreListComponent/list/list.component';
import { CartItemComponent } from './CartItemComponent/cart-item/cart-item.component';
import { CartComponent } from './CartListComponent/cart/cart.component'

@NgModule({ 
    declarations: [
    ListComponent,
    CartItemComponent,
    CartComponent
  ],
    exports: [ListComponent, CartComponent], 
    imports: [CommonModule, FormsModule], 
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class StoreModule {}
