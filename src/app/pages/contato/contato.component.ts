import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { SEOService } from '../../services/seo.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent implements OnInit {

  constructor(
    private seoService: SEOService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.seoService.updateSEO({
        title: 'Contato iOtorrino - Agende sua Consulta | Otorrinolaringologia SP',
        description: 'Entre em contato com a iOtorrino. Agende sua consulta de otorrinolaringologia. Telefone, WhatsApp, endereço e horários de funcionamento.',
        keywords: 'contato iOtorrino, agendar consulta, telefone otorrino, endereço clínica, WhatsApp médico, horário funcionamento',
        url: 'https://iotorrino.com.br/contato',
        type: 'website'
      });
    }
  }
}
