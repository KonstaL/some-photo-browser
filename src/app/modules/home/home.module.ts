import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { SharedModule } from '../shared/shared.module';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { ImageDetailResolverService } from './services/image-detail-resolver.service';

@NgModule({
  declarations: [HomeComponent, PhotoDetailComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [HomeComponent],
  providers: [ImageDetailResolverService],
})
export class HomeModule {}
