import { Component } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.css']
})
export class AppIconComponent {
  faTwitter = faTwitter;
}
