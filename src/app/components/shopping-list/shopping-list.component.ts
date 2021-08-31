import { Component, OnInit } from '@angular/core';
import { ShoppingListItemModel } from 'src/app/models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: ShoppingListItemModel[] = [
    { id: '1', description: 'Shampoo' },
    { id: '99', description: 'Conditioner' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  markPurchased(item: ShoppingListItemModel) {
    console.log(item);
  }

}
