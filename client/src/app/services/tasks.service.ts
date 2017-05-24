import {Injectable} from '@angular/core'; // should be able to Inject as a Dependency ??
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{

    //created constructor for TaskService
    constructor(private http:Http){
        console.log('Task Service initialized ...');
    }

    //function for GET request to API
    getTasks(){
        //returns an HTTP GET request
        return this.http.get('http://localhost:8080/api/tasks')
        .map(res => res.json()); //capture response as JSON in MAP

        
    }

    //function to add a Task
    addTask(newTask){
        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/task', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json()); //Mapped Output to JSON
    }
}