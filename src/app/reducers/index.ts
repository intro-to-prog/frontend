import { createSelector } from '@ngrx/store';
import { ShoppingListItemModel } from '../models';
import * as fromShopping from './shopping.reducer'
import * as fromErrors from './error.reducer';

export interface AppState {
  shopping: fromShopping.ShoppingState,
  errors: fromErrors.ErrorState
}


export const reducers = {
  shopping: fromShopping.reducer,
  errors: fromErrors.reducer
}


// Selector Functions - These are queries that components and stuff will use to observe the state they are interested in.

// Helpers
const selectShoppingData = (state: AppState) => state.shopping;
const selectErrorData = (state: AppState) => state.errors;

// const selectShoppingItemEntityArray = fromShopping.adapter.getSelectors(selectShoppingData).selectAll;
const { selectAll: selectShoppingItemEntityArray } = fromShopping.adapter.getSelectors(selectShoppingData);

// Actual Selectors (What your Components Need)

// TODO a selector that returns an observable array of ShoppingListItemModel[]
export const selectShoppingListItemModel = createSelector(
  selectShoppingItemEntityArray,
  (shoppingEntities) => shoppingEntities.map(item => ({
    ...item,
    isTemporary: item.id.toString().startsWith('TEMP')
  } as ShoppingListItemModel))
);

export const selectHasErrors = createSelector(
  selectErrorData,
  d => d.hasError
)

export const selectErrorMessage = createSelector(
  selectErrorData,
  d => d.message
)
