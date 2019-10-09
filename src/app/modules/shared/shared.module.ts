import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [PageNotFoundComponent, HeaderComponent],
  imports: [CommonModule, HttpClientModule, AppRoutingModule, MatSlideToggleModule, MatToolbarModule],
  exports: [PageNotFoundComponent, MatSlideToggleModule, HeaderComponent],
})
export class SharedModule {}
