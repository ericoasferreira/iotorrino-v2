// Configuração de imagens para SEO e SSR

export const IMAGE_CONFIG = {
  // Imagens públicas (acessíveis diretamente)
  public: {
    // URLs base para imagens públicas
    baseUrl: '/images/',
    iconsUrl: '/icons/',
    
    // Imagens essenciais para SEO
    ogImage: '/images/og-image.jpg',
    logo: '/images/logo.png',
    favicon: '/favicon.ico',
    
    // Imagens de páginas
    homeHero: '/images/home-hero.jpg',
    sobreEquipe: '/images/sobre-equipe.jpg',
    contatoBanner: '/images/contato-banner.jpg',
    
    // Ícones sociais
    social: {
      facebook: '/icons/facebook.svg',
      instagram: '/icons/instagram.svg',
      whatsapp: '/icons/whatsapp.svg',
      twitter: '/icons/twitter.svg'
    }
  },
  
  // Imagens do assets (processadas pelo Angular)
  assets: {
    baseUrl: 'assets/images/',
    iconsUrl: 'assets/icons/',
    
    // Imagens de componentes
    components: {
      headerBg: 'assets/images/components/header-bg.jpg',
      footerPattern: 'assets/images/components/footer-pattern.svg'
    },
    
    // Imagens de páginas
    pages: {
      homeHero: 'assets/images/pages/home-hero.jpg',
      sobreEquipe: 'assets/images/pages/sobre-equipe.jpg',
      contatoMapa: 'assets/images/pages/contato-mapa.jpg'
    },
    
    // Ícones
    icons: {
      medical: 'assets/icons/medical-icon.svg',
      phone: 'assets/icons/phone-icon.svg',
      email: 'assets/icons/email-icon.svg'
    }
  },
  
  // Configurações de otimização
  optimization: {
    // Formatos suportados
    formats: ['webp', 'jpg', 'png', 'svg'],
    
    // Tamanhos responsivos
    breakpoints: {
      mobile: 480,
      tablet: 768,
      desktop: 1200
    },
    
    // Qualidade de compressão
    quality: {
      high: 90,
      medium: 80,
      low: 70
    }
  }
};

// Função para gerar URLs de imagens otimizadas
export function getOptimizedImageUrl(
  imagePath: string, 
  width?: number, 
  format: 'webp' | 'jpg' | 'png' = 'webp'
): string {
  const baseUrl = imagePath.startsWith('/') ? '' : IMAGE_CONFIG.public.baseUrl;
  const fullPath = `${baseUrl}${imagePath}`;
  
  if (width) {
    const extension = imagePath.split('.').pop();
    const nameWithoutExt = imagePath.replace(/\.[^/.]+$/, '');
    return `${baseUrl}${nameWithoutExt}-${width}w.${format}`;
  }
  
  return fullPath;
}

// Função para gerar srcset responsivo
export function getResponsiveSrcSet(imagePath: string): string {
  const breakpoints = IMAGE_CONFIG.optimization.breakpoints;
  const srcset = Object.values(breakpoints)
    .map(width => `${getOptimizedImageUrl(imagePath, width)} ${width}w`)
    .join(', ');
  
  return srcset;
}


