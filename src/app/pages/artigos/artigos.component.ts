import { Component } from '@angular/core';
import { MainTitleComponent } from '../../components/main-title/main-title.component';

@Component({
  selector: 'app-artigos',
  standalone: true,
  imports: [MainTitleComponent],
  templateUrl: './artigos.component.html',
  styleUrl: './artigos.component.scss'
})
export class ArtigosComponent {

}
