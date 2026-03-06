import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ThemeService} from '../../service/theme-service';
import {inject} from 'vitest';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.html'
})
export class Header {
  menuOpen = false;

  constructor(public themeservice: ThemeService) {
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  protected onToggleTheme() {
    return this.themeservice.toggleTheme();
  }

  protected getTheme():boolean{
    return this.themeservice.getCurrentTheme();
  }
}
