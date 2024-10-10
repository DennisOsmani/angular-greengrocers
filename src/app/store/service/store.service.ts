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
      item.quantity!++;
    } else {
      this.cartList.push({...item, quantity: 1});
    }
  }
}
