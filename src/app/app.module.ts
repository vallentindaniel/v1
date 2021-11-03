import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { TokenomicsComponent } from './components/pages/tokenomics/tokenomics.component';
import { RoadmapComponent } from './components/pages/roadmap/roadmap.component';
import { SocialMediaComponent } from './components/pages/social-media/social-media.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { WhitepaperComponent } from './components/pages/whitepaper/whitepaper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    WelcomeComponent,
    FooterComponent,
    TokenomicsComponent,
    RoadmapComponent,
    SocialMediaComponent,
    AboutUsComponent,
    WhitepaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
