import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/themes";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public activeThemeIsDark: boolean = localStorage.getItem("theme") == "dark";
  public isMenuOpen: boolean = false;
  public isMenuClosed: boolean = false;

  constructor(private _theme: ThemeService) {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public toggleTheme(): void {
    if (localStorage.getItem("theme") == "dark") this._theme.setTheme("light");
    else this._theme.setTheme("dark");
  }
}
