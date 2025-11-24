import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { SEOService } from '../../services/seo.service';
import { isPlatformBrowser } from '@angular/common';
import { MainTitleComponent } from '../../components/main-title/main-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(
    private seoService: SEOService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   this.seoService.updateSEO({
    //     title: 'iOtorrino - Clínica de Otorrinolaringologia | Especialistas em SP',
    //     description: 'Clínica especializada em otorrinolaringologia em São Paulo. Tratamentos para problemas de ouvido, nariz e garganta. Agende sua consulta!',
    //     keywords: 'otorrinolaringologia, otorrino, clínica médica, São Paulo, problemas auditivos, sinusite, rinite, garganta',
    //     url: 'https://iotorrino.com.br',
    //     type: 'website'
    //   });
    // }
  }
}
