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
import { ContactComponent } from "./views/contact/contact.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FeedbackFormComponent } from './views/feedback-form/feedback-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    FeedbackFormComponent,
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
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
