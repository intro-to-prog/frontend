import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface ShoppingEntity {
  id: string;
  description: string;
}

export interface ShoppingState extends EntityState<ShoppingEntity> {

}

export const adapter = createEntityAdapter<ShoppingEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: ShoppingState = initialState, action: Action): ShoppingState {
  return reducerFunction(state, action);
}





