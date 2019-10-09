import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { PhotoDetailComponent } from './modules/home/components/photo-detail/photo-detail.component';
import { ImageDetailResolverService } from './modules/home/services/image-detail-resolver.service';

const routes: Routes = [
  { path: 'photos/:id', component: PhotoDetailComponent, resolve: { _: ImageDetailResolverService } },
  { path: 'photos', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'photos' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
