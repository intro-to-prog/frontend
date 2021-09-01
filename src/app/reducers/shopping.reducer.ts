import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/shopping.actions';
export interface ShoppingEntity {
  id: string;
  description: string;
}

export interface ShoppingState extends EntityState<ShoppingEntity> {

}

export const adapter = createEntityAdapter<ShoppingEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadTheShoppingListSucceeded, (currentState, action) => adapter.setAll(action.payload, currentState)),
  on(actions.temporaryShoppingItemCreated, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.shoppingItemCreated, (s, a) => adapter.updateOne({
    id: a.temporaryId,
    changes: {
      id: a.payload.id
    }
  }, s)),
  on(actions.shoppingItemDeleted, (s, a) => adapter.removeOne(a.payload.id, s))
);

export function reducer(state: ShoppingState = initialState, action: Action): ShoppingState {
  return reducerFunction(state, action);
}





