import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IMAGE_CONFIG, getOptimizedImageUrl, getResponsiveSrcSet } from '../config/image-config';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Obter URL de imagem otimizada
  getImageUrl(imagePath: string, width?: number, format?: 'webp' | 'jpg' | 'png'): string {
    return getOptimizedImageUrl(imagePath, width, format);
  }

  // Obter srcset responsivo
  getResponsiveSrcSet(imagePath: string): string {
    return getResponsiveSrcSet(imagePath);
  }

  // Obter imagem de Open Graph
  getOGImage(): string {
    return IMAGE_CONFIG.public.ogImage;
  }

  // Obter logo
  getLogo(): string {
    return IMAGE_CONFIG.public.logo;
  }

  // Obter ícone social
  getSocialIcon(platform: 'facebook' | 'instagram' | 'whatsapp' | 'twitter'): string {
    return IMAGE_CONFIG.public.social[platform];
  }

  // Pré-carregar imagem crítica
  preloadImage(imagePath: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = this.getImageUrl(imagePath);
      document.head.appendChild(link);
    }
  }

  // Lazy loading de imagem
  loadImageOnScroll(imagePath: string, callback: (url: string) => void): void {
    if (isPlatformBrowser(this.platformId)) {
      const img = new Image();
      img.onload = () => callback(this.getImageUrl(imagePath));
      img.src = this.getImageUrl(imagePath);
    }
  }

  // Verificar se imagem existe
  async imageExists(imagePath: string): Promise<boolean> {
    if (isPlatformBrowser(this.platformId)) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = this.getImageUrl(imagePath);
      });
    }
    return true; // No servidor, assume que existe
  }
}


