import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeService} from './service/theme-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('personal-website');

  constructor(private themeservice: ThemeService) {
  }

  ngOnInit() {
    this.themeservice.initTheme();
  }

  onToggleTheme() {
    this.themeservice.toggleTheme();
  }

}
