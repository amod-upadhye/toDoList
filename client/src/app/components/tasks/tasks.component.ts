import { Component } from '@angular/core';
import {TaskService} from '../../services/tasks.service';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
})
export class TasksComponent  {

  //add constructor with a call to taskService
  constructor(private taskService:TaskService){
    //Subscribe tasks from observables
    taskService.getTasks().subscribe(tasks =>{
      //capture tasks onto console
      console.log(tasks);
    });
  }
 }
