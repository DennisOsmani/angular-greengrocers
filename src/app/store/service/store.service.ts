import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Item } from '../models/item';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private http = inject(HttpClient);

  cartList: Item[] = [];

  public GetAllGroceries() : Observable<Item[]> {
    return this.http.get<Item[]>(environment.apiUrl);
  }

  getCartItems(): Item[] {
    return this.cartList;
  }

  addToCart(item: Item) : void {
    const exist = this.cartList.find((i) => i.id === item.id);
    if (exist) {
      exist.quantity! ++;
    } else {
      this.cartList.push({...item, quantity: 1});
    }
  }

  increaseQuantity(itemId: string) : void {
    const item = this.cartList.find(cartItem => cartItem.id === itemId);
    if (item) {
      if (item.quantity! > 0) {
        item.quantity! ++; 
  }
}
}

decreaseQuantity(itemId: string) : void {
  const item = this.cartList.find(cartItem => cartItem.id === itemId);
  if (item) {
    if (item.quantity! > 1) {
      item.quantity! --; 
    } else {
      this.cartList = this.cartList.filter((i) => i.id !== itemId);
}
}
}

totalCost() : number {
  return this.cartList.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
}

}
