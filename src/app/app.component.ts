import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = '4esthetics';
  public slides=['/assets/images/women.jpeg','/assets/images/women2.png','/assets/images/women3.jpg'];
}
