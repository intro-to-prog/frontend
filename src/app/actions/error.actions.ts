import { createAction, props } from '@ngrx/store';

export const displayError = createAction(
  '[errors] display application error',
  props<{ payload: string }>()
);


export const clearError = createAction(
  '[errors] clear error'
);
