import { Component } from '@angular/core';
import { faBookmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
 faBookmark = faBookmark;
}
