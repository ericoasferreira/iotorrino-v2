import { Component, inject } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [RouterOutlet, HeaderComponent],
})
export class App {
  // private router = inject(Router);
  // private platformId = inject(PLATFORM_ID);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          // Só executa no browser!
          if (event.urlAfterRedirects.startsWith('/sobre')) {
            document.documentElement.className = 'red-theme';
          } else if (event.urlAfterRedirects.startsWith('/contato')) {
            document.documentElement.className = 'green-theme';
          } else {
            document.documentElement.className = 'azure-theme';
          }
        });
    }
  }
}
