import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { SEOService } from '../../services/seo.service';
import { isPlatformBrowser } from '@angular/common';
import { MainTitleComponent } from '../../components/main-title/main-title.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [MainTitleComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent implements OnInit {

  constructor(
    private seoService: SEOService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
  }
}
