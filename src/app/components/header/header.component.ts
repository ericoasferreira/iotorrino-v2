import { Component, ViewChild, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver } from '@angular/cdk/layout';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, RouterModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMobile = false;
  currentTheme = 'azure-theme';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
      this.isMobile = result.matches;
    });

    // Detectar mudanças de rota e aplicar tema correspondente
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          this.applyThemeBasedOnRoute(event.urlAfterRedirects);
        });
    }
  }

  private applyThemeBasedOnRoute(url: string): void {
    if (isPlatformBrowser(this.platformId)) {
      // Remove todas as classes de tema existentes
      document.documentElement.className = document.documentElement.className
        .replace(/azure-theme|green-theme|orange-theme|red-theme|gray-theme/g, '').trim();

      // Aplica o tema baseado na rota
      if (url.startsWith('/sobre')) {
        this.currentTheme = 'green-theme';
        document.documentElement.className += ' green-theme';
      } else if (url.startsWith('/contato')) {
        this.currentTheme = 'orange-theme';
        document.documentElement.className += ' orange-theme';
      } else {
        this.currentTheme = 'azure-theme';
        document.documentElement.className += ' azure-theme';
      }
    }
  }
}
