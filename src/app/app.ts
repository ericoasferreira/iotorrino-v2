import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [HeaderComponent],
})
export class App {
}
