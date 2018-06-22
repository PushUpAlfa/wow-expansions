import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ExpansionsService } from './services/expansions.service';
import { ExpansionsComponent } from './components/expansions/expansions.component';
import { CardExpansionComponent } from './components/card-expansion/card-expansion.component';
import { ExpansionComponent } from './components/expansion/expansion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ExpansionsComponent,
    CardExpansionComponent,
    ExpansionComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [ ExpansionsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
