import { Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode:boolean = true;
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null)
  }

  getCurrentTheme():boolean{
    return this.isDarkMode;
  }

  toggleTheme():void{
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.removeClass(document.body, 'light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      this.renderer.addClass(document.body, 'light-theme');
      localStorage.setItem('theme', 'dark');
    }
  }
  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }
}
