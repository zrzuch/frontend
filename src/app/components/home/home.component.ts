import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sections = [
    {
      title: "About",
      body: "2"
    }
  ];
  constructor() {}
  ngOnInit = (): void => {};
}
