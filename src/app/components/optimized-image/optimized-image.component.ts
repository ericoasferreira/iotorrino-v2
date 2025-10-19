import { Component, Input, OnInit, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-optimized-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="image-container" [class.loading]="isLoading">
      <img 
        #imageElement
        [src]="imageSrc"
        [alt]="alt"
        [class]="cssClass"
        [loading]="lazy ? 'lazy' : 'eager'"
        [width]="width"
        [height]="height"
        (load)="onImageLoad()"
        (error)="onImageError()"
        [style.object-fit]="objectFit"
        [style.object-position]="objectPosition"
      />
      <div *ngIf="isLoading" class="loading-placeholder">
        <div class="spinner"></div>
      </div>
    </div>
  `,
  styles: [`
    .image-container {
      position: relative;
      overflow: hidden;
    }
    
    .image-container.loading {
      background-color: #f5f5f5;
    }
    
    .loading-placeholder {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f5f5f5;
    }
    
    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid #e0e0e0;
      border-top: 2px solid #2196f3;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    img {
      width: 100%;
      height: auto;
      transition: opacity 0.3s ease;
    }
  `]
})
export class OptimizedImageComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() width?: number;
  @Input() height?: number;
  @Input() lazy: boolean = true;
  @Input() cssClass: string = '';
  @Input() objectFit: string = 'cover';
  @Input() objectPosition: string = 'center';
  @Input() preload: boolean = false;

  @ViewChild('imageElement') imageElement?: ElementRef<HTMLImageElement>;

  imageSrc: string = '';
  isLoading: boolean = true;

  constructor(
    private imageService: ImageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.loadImage();
  }

  private loadImage(): void {
    if (this.preload) {
      this.imageService.preloadImage(this.src);
    }

    if (this.lazy && isPlatformBrowser(this.platformId)) {
      this.imageService.loadImageOnScroll(this.src, (url) => {
        this.imageSrc = url;
      });
    } else {
      this.imageSrc = this.imageService.getImageUrl(this.src);
    }
  }

  onImageLoad(): void {
    this.isLoading = false;
  }

  onImageError(): void {
    this.isLoading = false;
    // Fallback para imagem padrão
    this.imageSrc = this.imageService.getImageUrl('placeholder.jpg');
  }
}
