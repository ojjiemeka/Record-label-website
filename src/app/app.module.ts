import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './pages/user/index/index.component';
import { AboutComponent } from './pages/user/about/about.component';
import { BlogComponent } from './pages/user/blog/blog.component';
import { ContactComponent } from './pages/user/contact/contact.component';
import { ArtistsComponent } from './pages/user/artists/artists.component';
import { CareerComponent } from './pages/user/career/career.component';
import { HeaderTwoComponent } from './inc/header-two/header-two.component';
import { HeaderOneComponent } from './inc/header-one/header-one.component';
import { FooterComponent } from './inc/footer/footer.component';
import { SocialMediaManagerComponent } from './pages/jobs/social-media-manager/social-media-manager.component';
import { DigitalMarketerComponent } from './pages/jobs/digital-marketer/digital-marketer.component';
import { FeezyBComponent } from './pages/my-artists/feezy-b/feezy-b.component';
import { KijahJesseComponent } from './pages/my-artists/kijah-jesse/kijah-jesse.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    ArtistsComponent,
    CareerComponent,
    HeaderTwoComponent,
    HeaderOneComponent,
    FooterComponent,
    SocialMediaManagerComponent,
    DigitalMarketerComponent,
    FeezyBComponent,
    KijahJesseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
