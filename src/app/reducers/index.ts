import * as fromShopping from './shopping.reducer';

export interface AppState {
  shopping: fromShopping.ShoppingState
}


export const reducers = {
  shopping: fromShopping.reducer
}
