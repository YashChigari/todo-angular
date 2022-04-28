import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private todoService: TodoService
  ) { }

  task: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    priority: ['', [Validators.required]],
    teamName: ['', [Validators.required]],
  });

  ngOnInit(): void {
  }

  onSubmit(){
    this.todoService.saveTask(this.task.value).subscribe(
      serverData => {
        console.log('serverData', serverData);
        this.router.navigate(['/list']);
      },
      err => {
        console.log('Error saving task', err);
      }
    )
  }

  reset(){
    this.task.reset();
  }

}
