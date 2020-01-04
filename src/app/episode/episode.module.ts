import { NgModule } from '@angular/core';
import { EpisodeComponent } from './episode.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EpisodeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':slug',
        component: EpisodeComponent
      }
    ])
  ]
})
export class EpisodeModule {}
