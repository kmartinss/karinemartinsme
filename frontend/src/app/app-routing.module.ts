import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./views/about/about.component";
import { ContactComponent } from "./views/contact/contact.component";
import { HomeComponent } from "./views/home/home.component";
import { PortfolioComponent } from "./views/portfolio/portfolio.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "sobre",
    component: AboutComponent,
  },
  {
    path: "meu-portfolio",
    component: PortfolioComponent,
  },
  {
    path: "contato",
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
