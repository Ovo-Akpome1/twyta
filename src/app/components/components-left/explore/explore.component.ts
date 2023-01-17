import { Component } from '@angular/core';
import { faHashtag} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {
  faHashtag = faHashtag;
}
