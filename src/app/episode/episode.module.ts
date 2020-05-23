import { NgModule } from '@angular/core';
import { EpisodeComponent } from './episode.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ScullyContentModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [EpisodeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ScullyContentModule,
    RouterModule.forChild([
      {
        path: ':slug',
        component: EpisodeComponent
      }
    ])
  ]
})
export class EpisodeModule {}
