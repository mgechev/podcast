import { NgModule } from '@angular/core';
import { EpisodeComponent } from './episode.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [EpisodeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: ':slug',
        component: EpisodeComponent
      }
    ])
  ]
})
export class EpisodeModule {}
