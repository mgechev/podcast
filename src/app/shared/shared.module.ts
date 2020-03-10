import { NgModule } from '@angular/core';
import { EpisodeSummaryComponent } from './episode-summary.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxCircularPlayerModule } from 'ngx-circular-player';
import { Episodes } from './episodes';

@NgModule({
  declarations: [EpisodeSummaryComponent],
  exports: [EpisodeSummaryComponent],
  imports: [CommonModule, RouterModule, NgxCircularPlayerModule],
  providers: [{
    provide: Episodes,
    useClass: Episodes
  }]
})
export class SharedModule {}
