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
import { ArtistDetailComponent } from './pages/user/artist-detail/artist-detail.component';
import { CareerComponent } from './pages/user/career/career.component';
import { HeaderTwoComponent } from './inc/header-two/header-two.component';
import { HeaderOneComponent } from './inc/header-one/header-one.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    ArtistsComponent,
    ArtistDetailComponent,
    CareerComponent,
    HeaderTwoComponent,
    HeaderOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
