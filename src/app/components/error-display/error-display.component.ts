import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearError } from 'src/app/actions/error.actions';
import { AppState, selectErrorMessage, selectHasErrors } from 'src/app/reducers';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css']
})
export class ErrorDisplayComponent implements OnInit {

  hasError$!: Observable<boolean>;
  errorMessage$!: Observable<string | undefined>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.hasError$ = this.store.select(selectHasErrors);
    this.errorMessage$ = this.store.select(selectErrorMessage);
  }


  dismissError() {
    this.store.dispatch(clearError());
  }
}
