import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
