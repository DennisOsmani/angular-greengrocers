import { Component } from '@angular/core';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  constructor(public readonly storeService: StoreService) {}
}
