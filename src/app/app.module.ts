import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEntryComponent } from './components/shopping-entry/shopping-entry.component';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffects } from './effects/shopping.effects';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    NavComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEntryComponent,
    ErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    EffectsModule.forRoot([ShoppingEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
