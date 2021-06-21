import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from 'src/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUtl = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUtl)
  }

  delete(id: any):Observable<void>{
    const url = `${this.baseUtl}/${id}`
    return this.http.delete<void>(url);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, "OK!", {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3500
    })
  }
}
