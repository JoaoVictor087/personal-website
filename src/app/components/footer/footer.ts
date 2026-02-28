import { Component } from '@angular/core';
import {ThemeService} from '../../service/theme-service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './footer.html'
})
export class Footer {
  constructor(public themeservice: ThemeService) {
  }

  protected getTheme():boolean{
    return this.themeservice.getCurrentTheme();
  }

}
