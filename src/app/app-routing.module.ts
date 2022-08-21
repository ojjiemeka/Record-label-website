import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalMarketerComponent } from './pages/jobs/digital-marketer/digital-marketer.component';
import { SocialMediaManagerComponent } from './pages/jobs/social-media-manager/social-media-manager.component';
import { FeezyBComponent } from './pages/my-artists/feezy-b/feezy-b.component';
import { KijahJesseComponent } from './pages/my-artists/kijah-jesse/kijah-jesse.component';
import { AboutComponent } from './pages/user/about/about.component';
import { ArtistsComponent } from './pages/user/artists/artists.component';
import { BlogComponent } from './pages/user/blog/blog.component';
import { CareerComponent } from './pages/user/career/career.component';
import { ContactComponent } from './pages/user/contact/contact.component';
import { IndexComponent } from './pages/user/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'about', component: AboutComponent},
  { path: 'artists', component: ArtistsComponent},
  { path: 'artists/feezy-b', component: FeezyBComponent},
  { path: 'artists/kijah-jesse', component: KijahJesseComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'jobs', component: CareerComponent},
  { path: 'jobs/account-manager', component: SocialMediaManagerComponent},
  { path: 'jobs/digital-marketer', component: DigitalMarketerComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
