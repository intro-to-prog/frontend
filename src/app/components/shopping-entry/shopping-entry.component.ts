import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import * as actions from '../../actions/shopping.actions';
@Component({
  selector: 'app-shopping-entry',
  templateUrl: './shopping-entry.component.html',
  styleUrls: ['./shopping-entry.component.css']
})
export class ShoppingEntryComponent implements OnInit {


  form: FormGroup = this.formBuilder.group({
    description: ['', [Validators.required, Validators.maxLength(400)]]
  });
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>) { }

  get description() { return this.form.get('description'); }

  ngOnInit(): void {
  }

  submit(el: HTMLInputElement) {
    if (this.form.valid) {
      this.store.dispatch(actions.shoppingItemAdded({
        payload: {
          description: this.description?.value
        }
      }));
      el.value = '';
      el.focus();
    } else {
      console.log(`There are errors!`);
    }
  }
}
