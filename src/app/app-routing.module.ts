import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { PhotoDetailComponent } from './modules/home/components/photo-detail/photo-detail.component';
import { ImageDetailResolverService } from './modules/home/services/image-detail-resolver.service';
import { PhotoAlbumComponent } from './modules/home/components/photo-album/photo-album.component';

const routes: Routes = [
  { path: 'albums/:id', component: PhotoAlbumComponent },
  { path: 'photos/:id', component: PhotoDetailComponent, resolve: { _: ImageDetailResolverService } },
  { path: 'photos', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'photos' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
