import { Component } from '@angular/core';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Angular2FontAwesomeModule]
})
export class AppComponent {
  title = 'Around The World Volunteers!';
}
