import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  listFinished: Todo[] = [];
  
  constructor(private service: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((response) => {
      response.forEach(todo =>{
        if(todo.finalizado){
          this.listFinished.push(todo);
      }
    })
  })
}

}
