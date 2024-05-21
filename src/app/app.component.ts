import { Component } from '@angular/core'; 
import { Person } from './models/person';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  dataList: Person[] = data;
 

  
}
