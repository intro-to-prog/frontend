import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shoppingItemDeleted } from 'src/app/actions/shopping.actions';
import { ShoppingListItemModel } from 'src/app/models';
import { AppState, selectShoppingListItemModel } from 'src/app/reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items$!: Observable<ShoppingListItemModel[]>;
  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.items$ = this.store.select(selectShoppingListItemModel);
  }

  markPurchased(item: ShoppingListItemModel) {
    this.store.dispatch(shoppingItemDeleted({ payload: item }));
  }

}
