import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { environment } from '../../environments/environment'; // NEVER IMPORT ANY OTHER ENVIRONMENT BUT THIS ONE.
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as actions from '../actions/shopping.actions';
import { ShoppingEntity } from '../reducers/shopping.reducer';
import { of } from 'rxjs';
@Injectable()
export class ShoppingEffects {

  readonly apiUrl = environment.apiUrl;
  tempId = 1;

  // shoppingItemDeleted -> (make an api call.) -> NOTHING
  markItemPurchased$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.shoppingItemDeleted),
      switchMap(a => this.client.delete(this.apiUrl + '/shopping/' + a.payload.id))
    )
    , { dispatch: false }
  )

  saveTemporaryShoppingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.temporaryShoppingItemCreated), // only care about this.
      switchMap(originalTemporaryItem => this.client.post<ShoppingEntity>(this.apiUrl + '/shopping',
        { description: originalTemporaryItem.payload.description }) // send it to the server, gets back a ShoppingEntity with a "real" id
        .pipe(
          map(payload => actions.shoppingItemCreated({ payload, temporaryId: originalTemporaryItem.payload.id })),
          catchError(r => of(actions.shoppingItemCreationFailed({ payload: originalTemporaryItem.payload, errorMessage: 'Cannot Add This Item' })))
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
