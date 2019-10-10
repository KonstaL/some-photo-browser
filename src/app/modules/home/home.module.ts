import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { SharedModule } from '../shared/shared.module';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { ImageDetailResolverService } from './services/image-detail-resolver.service';
import { PhotoAlbumComponent } from './components/photo-album/photo-album.component';

@NgModule({
  declarations: [HomeComponent, PhotoDetailComponent, PhotoAlbumComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [HomeComponent],
  providers: [ImageDetailResolverService],
})
export class HomeModule {}
