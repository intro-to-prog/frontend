import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  info = 'This is a field';

  todoList = [
    'Clean Garage',
    'Unpack Boxes',
    'Fix Cabling on Home Server'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addThingToList(thing: string) {
    this.todoList = [thing, ...this.todoList];
  }
}
