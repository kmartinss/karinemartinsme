import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AboutComponent } from "./views/about/about.component";
import { HomeComponent } from "./views/home/home.component";
import { PortfolioComponent } from "./views/portfolio/portfolio.component";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SkillsComponent } from "./views/skills/skills.component";
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    PortfolioComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
