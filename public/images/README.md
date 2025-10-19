# 📁 Imagens Públicas - iOtorrino

Esta pasta contém imagens que são servidas diretamente pelo servidor e são acessíveis via URL pública.

## 🎯 **Quando usar esta pasta:**

### ✅ **Use `public/images/` para:**
- **Imagens de SEO**: og-image.jpg, logo.png
- **Imagens de páginas**: banners, hero images
- **Imagens grandes**: fotos de equipe, clínica
- **Imagens que precisam de URL fixa**: para meta tags, sitemap
- **Imagens que mudam raramente**: logos, ícones sociais

### 📋 **Estrutura recomendada:**
```
public/images/
├── og-image.jpg          # Imagem para Open Graph (1200x630px)
├── logo.png              # Logo da clínica
├── home-hero.jpg         # Banner da página inicial
├── sobre-equipe.jpg      # Foto da equipe
├── contato-banner.jpg    # Banner da página de contato
└── placeholder.jpg       # Imagem de fallback
```

## 🚀 **Como usar:**

### **1. No HTML (meta tags):**
```html
<meta property="og:image" content="/images/og-image.jpg">
```

### **2. No CSS:**
```css
.hero-banner {
  background-image: url('/images/home-hero.jpg');
}
```

### **3. No TypeScript:**
```typescript
const imageUrl = '/images/logo.png';
```

## ⚡ **Otimizações:**
- Use WebP quando possível
- Comprima as imagens antes de adicionar
- Use nomes descritivos
- Mantenha tamanhos apropriados (max 2MB)

## 🔗 **URLs geradas:**
- `https://iotorrino.com.br/images/logo.png`
- `https://iotorrino.com.br/images/og-image.jpg`


