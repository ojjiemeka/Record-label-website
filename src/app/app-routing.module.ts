import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  { path: 'blog', component: BlogComponent},
  { path: 'career', component: CareerComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
