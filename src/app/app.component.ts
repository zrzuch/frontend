import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller: boolean = false;
  linkedInUrl = 'https://www.linkedin.com/in/zachary-zuch/';
  githubUrl = 'https://github.com/zrzuch';
  open = (url: string) => window.open(url, '_blank');
}
