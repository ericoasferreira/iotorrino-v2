import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

interface BreadcrumbItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav aria-label="Breadcrumb" class="breadcrumbs">
      <ol class="breadcrumb-list">
        <li class="breadcrumb-item">
          <a routerLink="/" class="breadcrumb-link">Home</a>
        </li>
        <li *ngFor="let item of breadcrumbs; let last = last" class="breadcrumb-item">
          <span class="breadcrumb-separator">/</span>
          <a *ngIf="!last" [routerLink]="item.url" class="breadcrumb-link">{{ item.label }}</a>
          <span *ngIf="last" class="breadcrumb-current">{{ item.label }}</span>
        </li>
      </ol>
    </nav>
  `,
  styles: [`
    .breadcrumbs {
      padding: 8px 0;
      font-size: 14px;
    }
    
    .breadcrumb-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .breadcrumb-item {
      display: flex;
      align-items: center;
    }
    
    .breadcrumb-separator {
      margin: 0 8px;
      color: #666;
    }
    
    .breadcrumb-link {
      color: #2196f3;
      text-decoration: none;
    }
    
    .breadcrumb-link:hover {
      text-decoration: underline;
    }
    
    .breadcrumb-current {
      color: #333;
      font-weight: 500;
    }
  `]
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: BreadcrumbItem[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.updateBreadcrumbs();
        });
    }
  }

  private updateBreadcrumbs(): void {
    const breadcrumbs: BreadcrumbItem[] = [];
    let currentRoute = this.route.root;

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
      const routeData = currentRoute.snapshot.data;
      const routeUrl = currentRoute.snapshot.url.map(segment => segment.path).join('/');

      if (routeData['breadcrumb'] && routeUrl) {
        breadcrumbs.push({
          label: routeData['breadcrumb'],
          url: '/' + routeUrl
        });
      }
    }

    this.breadcrumbs = breadcrumbs;
  }
}
