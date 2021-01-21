import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  todos = [
    "todo1",
    "todo2",
    "todo3",
    "todo4",
    "todo5"
  ]

  todo = "";

  add() {
    this.todos.push("todo$")
    console.log(this.todos)
  }

  change(event: any) {
    this.todo = (event.target as HTMLInputElement).value;
  }
}
