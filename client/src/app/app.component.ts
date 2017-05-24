import { Component } from '@angular/core';
import {TaskService} from './services/tasks.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  //need to add service as providers
  providers:[TaskService],
})
export class AppComponent  { name = 'Angular'; }
