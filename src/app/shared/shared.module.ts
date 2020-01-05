import { NgModule } from '@angular/core';
import { EpisodeSummaryComponent } from './episode-summary.component';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EpisodeSummaryComponent, PlayerComponent],
  exports: [EpisodeSummaryComponent],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {}
