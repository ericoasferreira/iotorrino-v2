import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { SEOService } from '../../services/seo.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent implements OnInit {

  constructor(
    private seoService: SEOService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.seoService.updateSEO({
        title: 'Sobre a iOtorrino - Nossa História e Especialistas | Otorrinolaringologia',
        description: 'Conheça a iOtorrino, clínica especializada em otorrinolaringologia. Nossa equipe de médicos especialistas e nossa missão de cuidar da sua saúde auditiva.',
        keywords: 'sobre iOtorrino, clínica otorrino, médicos especialistas, história da clínica, equipe médica, otorrinolaringologia SP',
        url: 'https://iotorrino.com.br/sobre',
        type: 'website'
      });
    }
  }
}
