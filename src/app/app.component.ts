import { Component, Injector } from '@angular/core';
import { BaseService } from './services/base';
import { ThemeService } from './services/themes';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' 
})
export class AppComponent extends BaseService {
  public activeThemeIsDark: boolean = localStorage.getItem("theme") == "dark";
  public isMenuOpen: boolean = false;
  public isMenuClosed: boolean = false;

  constructor(public _theme: ThemeService, private _injector: Injector) {
    super(_injector);

    this.checkThemeI();
  }
  
  public checkThemeI(): void {
    if (localStorage.getItem('theme')) this._theme.setTheme(localStorage.getItem('theme'));
    else this._theme.setTheme('light');
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public toggleTheme(): void {
    if (localStorage.getItem("theme") == "dark") this._theme.setTheme("light");
    else this._theme.setTheme("dark");
  }


}
