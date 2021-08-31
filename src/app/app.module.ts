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


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    NavComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
