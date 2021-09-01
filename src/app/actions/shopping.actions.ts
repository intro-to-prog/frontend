import { createAction, props } from '@ngrx/store';
import { ShoppingEntity } from '../reducers/shopping.reducer';



export const shoppingItemDeleted = createAction(
  '[shopping] shopping item deleted',
  props<{ payload: ShoppingEntity }>()
);



// Commands (I need something to happen - and I'm sort of expecting a response)
export const loadTheShoppingList = createAction(
  '[shopping] load the shopping list'
);

export const loadTheShoppingListSucceeded = createAction(
  '[shopping] loading the shopping list succeeded',
  props<{ payload: ShoppingEntity[] }>()
);



// Event (this happened. Somebody might care)
// the ui (shopping-entry component) sends this.
export const shoppingItemAdded = createAction(
  '[shopping] a shopping item was added',
  props<{ payload: AddShoppingItem }>()
);

// this one is created by our shopping-effect so we can tell a little lie
export const temporaryShoppingItemCreated = createAction(
  '[shopping] temporary shopping item created',
  props<{ payload: ShoppingEntity }>()
);

export const shoppingItemCreated = createAction(
  '[shopping] shopping item created',
  props<{ temporaryId: string, payload: ShoppingEntity }>()
);

export const shoppingItemCreationFailed = createAction(
  '[shopping] shopping item creation failed',
  props<{ payload: ShoppingEntity, errorMessage: string }>()
);

interface AddShoppingItem {
  description: string
}
