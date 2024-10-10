import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly storeService: StoreService) {}

  items$: Observable<Item[]> = this.storeService.GetAllGroceries();

  addToCart(item: Item): void {
    this.storeService.addToCart(item);
  }
  
  // Lage en cart-item
  // cart-list
  // knappe funksjon
  // total funksjon
}
