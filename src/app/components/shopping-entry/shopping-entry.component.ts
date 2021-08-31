import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-entry',
  templateUrl: './shopping-entry.component.html',
  styleUrls: ['./shopping-entry.component.css']
})
export class ShoppingEntryComponent implements OnInit {


  form: FormGroup = this.formBuilder.group({
    description: ['', [Validators.required, Validators.maxLength(400)]]
  });
  constructor(private formBuilder: FormBuilder) { }

  get description() { return this.form.get('description'); }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log(`There are errors!`);
    }
  }
}
