import { NgModule } from '@angular/core';
import { EpisodeSummaryComponent } from './episode-summary.component';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { Episodes } from './episodes';

@NgModule({
  declarations: [EpisodeSummaryComponent, PlayerComponent],
  exports: [EpisodeSummaryComponent],
  imports: [CommonModule, RouterModule],
  providers: [{
    provide: Episodes,
    useClass: Episodes
  }]
})
export class SharedModule {}
