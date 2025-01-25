import { Component, ViewEncapsulation } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { toSignal } from '@angular/core/rxjs-interop';

import { EpisodeSummaryComponent } from '../../shared/episode-summary.component';
import { Episode } from '../../shared/episodes';

@Component({
  selector: 'app-episode',
  imports: [EpisodeSummaryComponent, MarkdownComponent],
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export default class EpisodeComponent {
  currentEpisode = toSignal(injectContent<Episode>({
    param: 'slug',
    subdirectory: 'episodes'
  }));
}
