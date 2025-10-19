import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  private baseUrl = 'https://iotorrino.com.br'; // Substitua pela sua URL
  private defaultImage = '/images/og-image.jpg';
  private defaultLogo = '/images/logo.png';

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  updateSEO(data: SEOData): void {
    if (!isPlatformBrowser(this.platformId)) {
      return; // Só executa no servidor
    }

    // Título da página
    this.title.setTitle(data.title);

    // Meta tags básicas
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ name: 'keywords', content: data.keywords });

    // Open Graph (Facebook, LinkedIn, etc.)
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: data.type || 'website' });
    this.meta.updateTag({ property: 'og:url', content: data.url || this.baseUrl });
    this.meta.updateTag({ property: 'og:image', content: data.image || `${this.baseUrl}${this.defaultImage}` });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: data.image || `${this.baseUrl}${this.defaultImage}` });

    // Schema.org JSON-LD
    this.addStructuredData(data);
  }

  private addStructuredData(data: SEOData): void {
    // Só executa no servidor, não no browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "iOtorrino",
      "description": data.description,
      "url": data.url || this.baseUrl,
      "logo": `${this.baseUrl}${this.defaultLogo}`,
      "image": data.image || `${this.baseUrl}${this.defaultImage}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Exemplo, 123",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "01234-567",
        "addressCountry": "BR"
      },
      "telephone": "+55-11-99999-9999",
      "openingHours": "Mo-Fr 08:00-18:00",
      "medicalSpecialty": "Otorrinolaringologia"
    };

    // Remove structured data existente
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Adiciona novo structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
}
