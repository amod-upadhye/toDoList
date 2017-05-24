import { Component } from '@angular/core';
import {TaskService} from '../../services/tasks.service';
import {Task} from '../../../../Task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
})
export class TasksComponent  {
  tasks: Task[];
  title: string;
  //add constructor with a call to taskService
  constructor(private taskService:TaskService){
    
    //Subscribe tasks from observables
    taskService.getTasks().subscribe(tasks =>{
      /*capture tasks onto console
      console.log(tasks); */
      this.tasks = tasks;
    });
  }
  
  addTask(event){

    //to prevent submit
    event.preventDefault();
    /*
    console.log(this.title); 
    */
    var newTask = {
      title: this.title;
      description: this.description;
      isDone: false;
    }
    
    
    //Call the add Task method in task service
    this.taskService.addTask(newTask)
    .subscribe(task => this.tasks.push(task)); //subscribe method gets back a task and it is pushed to tasks array displayed on screen

    //clear form
    this.title = '';
    this.description = '';
  }
 }
