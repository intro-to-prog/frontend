import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTheShoppingList } from 'src/app/actions/shopping.actions';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(store: Store<AppState>) {
    store.dispatch(loadTheShoppingList());
  }

  ngOnInit(): void {
  }

}
