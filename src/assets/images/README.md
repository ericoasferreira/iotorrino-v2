# 📁 Assets de Imagens - iOtorrino

Esta pasta contém imagens que são processadas pelo Angular e otimizadas automaticamente.

## 🎯 **Quando usar esta pasta:**

### ✅ **Use `src/assets/images/` para:**
- **Imagens de componentes**: backgrounds, ícones
- **Imagens que mudam frequentemente**: conteúdo dinâmico
- **Imagens pequenas**: ícones, thumbnails
- **Imagens que precisam de lazy loading**
- **Imagens responsivas**

### 📋 **Estrutura recomendada:**
```
src/assets/images/
├── components/
│   ├── header-bg.jpg     # Background do header
│   ├── footer-pattern.svg # Padrão do footer
│   └── button-icon.svg   # Ícone de botão
├── pages/
│   ├── home-hero.jpg     # Hero da página inicial
│   ├── sobre-equipe.jpg  # Equipe médica
│   └── contato-mapa.jpg  # Mapa da clínica
└── icons/
    ├── medical-icon.svg  # Ícone médico
    ├── phone-icon.svg    # Ícone telefone
    └── email-icon.svg    # Ícone email
```

## 🚀 **Como usar:**

### **1. No template:**
```html
<app-optimized-image 
  src="assets/images/pages/home-hero.jpg"
  alt="Clínica iOtorrino"
  [lazy]="true"
  [preload]="false">
</app-optimized-image>
```

### **2. No CSS:**
```css
.background {
  background-image: url('assets/images/components/header-bg.jpg');
}
```

### **3. No TypeScript:**
```typescript
const imageUrl = 'assets/images/pages/sobre-equipe.jpg';
```

## ⚡ **Vantagens:**
- ✅ Lazy loading automático
- ✅ Otimização automática
- ✅ Cache do Angular
- ✅ Responsive images
- ✅ Fallback automático

## 🔧 **Configuração:**
Use o `ImageService` para gerenciar imagens:
```typescript
constructor(private imageService: ImageService) {}

ngOnInit() {
  const imageUrl = this.imageService.getImageUrl('assets/images/hero.jpg');
  this.imageService.preloadImage('assets/images/critical.jpg');
}
```


