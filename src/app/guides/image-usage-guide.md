# 📸 Guia de Uso de Imagens - iOtorrino

## 🎯 **Decisão Rápida: Qual Usar?**

### **Use `app-optimized-image` quando:**
- ✅ Imagem é **conteúdo principal** (banners, fotos, ilustrações)
- ✅ Precisa de **lazy loading** (não é crítica para o carregamento inicial)
- ✅ Precisa ser **responsiva** (diferentes tamanhos para mobile/desktop)
- ✅ Vem de **assets** (`src/assets/images/`)
- ✅ Pode **mudar dinamicamente**

### **Use `<img>` normal quando:**
- ✅ Imagem é **crítica para SEO** (logo, og-image)
- ✅ É um **ícone pequeno** (redes sociais, interface)
- ✅ Precisa **carregar imediatamente** (above the fold)
- ✅ Vem de **public** (`/images/`, `/icons/`)
- ✅ É **estática** (não muda)

## 📋 **Exemplos Práticos**

### **1. Página Home - Banner Principal**
```html
<!-- ✅ Use app-optimized-image -->
<app-optimized-image 
  src="assets/images/pages/home-hero.jpg"
  alt="Clínica iOtorrino - Especialistas em Otorrinolaringologia"
  [lazy]="false"
  [preload]="true"
  cssClass="hero-banner">
</app-optimized-image>
```

### **2. Logo no Header**
```html
<!-- ✅ Use img normal -->
<img src="/images/logo.png" alt="iOtorrino" class="logo">
```

### **3. Galeria de Fotos da Equipe**
```html
<!-- ✅ Use app-optimized-image -->
<app-optimized-image 
  *ngFor="let doctor of doctors"
  [src]="'assets/images/doctors/' + doctor.photo"
  [alt]="doctor.name"
  [lazy]="true"
  cssClass="doctor-photo">
</app-optimized-image>
```

### **4. Ícones de Redes Sociais**
```html
<!-- ✅ Use img normal -->
<a href="https://facebook.com/iotorrino">
  <img src="/icons/facebook.svg" alt="Facebook" class="social-icon">
</a>
```

### **5. Imagem de Tratamento**
```html
<!-- ✅ Use app-optimized-image -->
<app-optimized-image 
  src="assets/images/treatments/sinusite.jpg"
  alt="Tratamento de Sinusite"
  [lazy]="true"
  width="400"
  height="300">
</app-optimized-image>
```

## ⚡ **Configurações Recomendadas**

### **Para Imagens Críticas (Above the Fold):**
```html
<app-optimized-image 
  [lazy]="false"
  [preload]="true"
  [src]="criticalImage">
</app-optimized-image>
```

### **Para Imagens Secundárias:**
```html
<app-optimized-image 
  [lazy]="true"
  [preload]="false"
  [src]="secondaryImage">
</app-optimized-image>
```

### **Para Imagens de SEO:**
```html
<img src="/images/og-image.jpg" alt="iOtorrino" class="seo-image">
```

## 🔧 **Propriedades do app-optimized-image**

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `src` | string | - | Caminho da imagem |
| `alt` | string | - | Texto alternativo |
| `lazy` | boolean | true | Lazy loading |
| `preload` | boolean | false | Pré-carregar |
| `width` | number | - | Largura |
| `height` | number | - | Altura |
| `cssClass` | string | - | Classe CSS |
| `objectFit` | string | 'cover' | Como a imagem se ajusta |
| `objectPosition` | string | 'center' | Posição da imagem |

## 🎨 **CSS Recomendado**

```css
/* Para imagens otimizadas */
.hero-banner {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.doctor-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

/* Para imagens normais */
.logo {
  height: 40px;
  width: auto;
}

.social-icon {
  width: 24px;
  height: 24px;
}
```

## 🚀 **Dicas de Performance**

1. **Use WebP** quando possível
2. **Comprima imagens** antes de adicionar
3. **Use lazy loading** para imagens abaixo da dobra
4. **Pré-carregue** imagens críticas
5. **Use tamanhos apropriados** (não muito grandes)
6. **Adicione alt text** descritivo
7. **Use srcset** para imagens responsivas


