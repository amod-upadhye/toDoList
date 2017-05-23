import {Injectable} from '@angular/core'; // should be able to Inject as a Dependency ??
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{

    //created constructor for TaskService
    constructor(private http:Http){
        console.log('Task Service initialized ...');
    }
}