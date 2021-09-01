import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { environment } from '../../environments/environment'; // NEVER IMPORT ANY OTHER ENVIRONMENT BUT THIS ONE.
import { map, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as actions from '../actions/shopping.actions';
import { ShoppingEntity } from '../reducers/shopping.reducer';
@Injectable()
export class ShoppingEffects {

  readonly apiUrl = environment.apiUrl;
  tempId = 1;

  saveTemporaryShoppingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.temporaryShoppingItemCreated), // only care about this.
      switchMap(originalTemporaryItem => this.client.post<ShoppingEntity>(this.apiUrl + '/shopping',
        { description: originalTemporaryItem.payload.description }) // send it to the server, gets back a ShoppingEntity with a "real" id
        .pipe(
          map(payload => actions.shoppingItemCreated({ payload, temporaryId: originalTemporaryItem.payload.id })) // Turn that into an action
        )
      )
    ), { dispatch: true }
  );


  // shoppingItemAdded -> (TEMP id created) -> temporaryShoppingItemCreated
  createTemporaryShoppingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.shoppingItemAdded),
      map(item => item.payload.description),
      map((description) => actions.temporaryShoppingItemCreated({ payload: { id: 'TEMP' + this.tempId++, description } }))
    )
  );

  // loadTheShoppingList -> (api call!) -> loadTheShoppingListSucceeded

  loadShoppingItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadTheShoppingList), // only care about loading the shopping list
      switchMap(() => this.client.get<{ data: ShoppingEntity[] }>(this.apiUrl + '/shopping') // start the api call
        .pipe(   // when the response comes back (in the future)
          map(response => response.data), // { data: ShoppingEntity[] } I only care about the data property, that's what I action (ShoppingEntit[])
          map(payload => actions.loadTheShoppingListSucceeded({ payload })) // ShoppingEntity[] => loadTheShoppingListSucceded({ payload })
        )
      )
    ), { dispatch: true }
  );

  // logThemAll$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(action => console.log(`Got an action of type ${action.type}`))
  //   ), { dispatch: false }
  // );

  constructor(private actions$: Actions, private client: HttpClient) { }
}
