import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, HttpClientModule, MatSlideToggleModule],
  exports: [PageNotFoundComponent, MatSlideToggleModule],
})
export class SharedModule {}
