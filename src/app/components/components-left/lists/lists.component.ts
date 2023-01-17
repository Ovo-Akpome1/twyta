import { Component } from '@angular/core';
import { faList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
faList = faList;
}
