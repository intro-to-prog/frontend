import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEntryComponent } from './shopping-entry.component';

describe('ShoppingEntryComponent', () => {
  let component: ShoppingEntryComponent;
  let fixture: ComponentFixture<ShoppingEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
