import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService : TodoService) {}

  item_no = 10;
  filterText: any;
  data: any;
  nil = 'Nil';

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.todoService.getList().subscribe(
      serverData => {
        console.log('data from server', serverData);
        this.data = serverData['data' as keyof Object];
      },
      err => {
        console.log('Error fetching list', err);
      }
    )
  }

  deleteTask(taskId: String, index: Number){
    console.log('Taskid', taskId);
    console.log('index', index);
    this.todoService.deleteTask(taskId).subscribe(
      serverData => {
        console.log('Delete success', serverData);
        this.data.splice(index,1);
      },
      err => {
        console.log('Error deleting task', err);
      }
    )
  }

}
