import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EpisodeSummaryComponent } from './episode-summary.component';

@NgModule({
  declarations: [HomeComponent, EpisodeSummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule {}
