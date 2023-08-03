import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  name: any = '';


  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit() {
    
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        console.log(todos);
        this.todos = todos;
      },

      error: (error) => {
        console.log(error);
      },
    });
  }

  postTodos() {
    if (this.name === '') {
      return;
    } else {
      const content = {
        isCompleted: false,
        text: this.name,
      };

      this.todoService.postTodos(content).subscribe({
        next: (response) => {
          location.reload();
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }



}
