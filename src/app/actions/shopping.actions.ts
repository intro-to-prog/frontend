import { createAction, props } from '@ngrx/store';

export const shoppingItemAdded = createAction(
  '[shopping] a shopping item was added',
  props<{ payload: AddShoppingItem }>()
);


interface AddShoppingItem {
  description: string
}
