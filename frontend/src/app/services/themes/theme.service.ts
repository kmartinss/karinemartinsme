import { Injectable } from "@angular/core";
import { Theme, light, dark } from "./theme";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private active: Theme = light;
  private availableThemes = {
    light: light,
    dark: dark,
  };

  getAvailableThemes(): any {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  public setTheme(theme: string) {
    this.setActiveTheme(this.availableThemes[theme]);
  }

  private setActiveTheme(theme: Theme): void {
    this.active = theme;

    localStorage.setItem('theme', theme.name);

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(property, this.active.properties[property]);
    });
  }
}