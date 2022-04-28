import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly baseURL = environment.url;
  constructor(private http: HttpClient) { }

  //fetch all product details


  getList() {
    return this.http.get(this.baseURL + '/get-list');
  }

  saveTask(task:any) {
    return this.http.post(this.baseURL + '/save-task', task);
  }

  deleteTask(taskId: String) {
    return this.http.delete(this.baseURL + '/delete-task/' + taskId);
  }
}
