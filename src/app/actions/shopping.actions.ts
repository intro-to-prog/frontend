import { createAction, props } from '@ngrx/store';
import { ShoppingEntity } from '../reducers/shopping.reducer';

// Commands (I need something to happen - and I'm sort of expecting a response)
export const loadTheShoppingList = createAction(
  '[shopping] load the shopping list'
);

export const loadTheShoppingListSucceeded = createAction(
  '[shopping] loading the shopping list succeeded',
  props<{ payload: ShoppingEntity[] }>()
);



// Event (this happened. Somebody might care)
export const shoppingItemAdded = createAction(
  '[shopping] a shopping item was added',
  props<{ payload: AddShoppingItem }>()
);


interface AddShoppingItem {
  description: string
}
