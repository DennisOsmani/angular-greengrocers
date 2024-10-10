import { Component } from '@angular/core';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(public readonly storeService: StoreService) {}
}
