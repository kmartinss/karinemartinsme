import { Injectable, Injector } from "@angular/core";
import { ThemeService } from "../themes";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  public _theme: ThemeService;

  constructor(injector: Injector) {
    this._theme = injector.get(ThemeService);
  }

  public reducer = (somador: number, adicional: number) => somador + adicional;
}
