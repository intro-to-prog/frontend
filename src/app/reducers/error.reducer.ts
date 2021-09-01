import { Action, createReducer, on } from "@ngrx/store"
import * as actions from '../actions/error.actions';

export interface ErrorState {
  hasError: boolean;
  message?: string;
}

const initialState: ErrorState = {
  hasError: false
}



const reducerFunction = createReducer(
  initialState,
  on(actions.clearError, () => initialState),
  on(actions.displayError, (s, a) => ({ hasError: true, message: a.payload }))
)


export function reducer(state: ErrorState = initialState, action: Action): ErrorState {
  return reducerFunction(state, action);
}


