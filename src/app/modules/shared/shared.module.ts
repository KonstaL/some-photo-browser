import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ApiService } from './services/api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ThemeService } from './services/theme.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [PageNotFoundComponent, HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  exports: [PageNotFoundComponent, MatSlideToggleModule, HeaderComponent, MatProgressSpinnerModule],
  providers: [ApiService, ThemeService],
})
export class SharedModule {}
