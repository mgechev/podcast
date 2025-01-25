import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ContentFile } from '@analogjs/content';

import { EpisodeSummaryComponent } from '../shared/episode-summary.component';
import { Episodes, Episode } from '../shared/episodes';

@Component({
  selector: 'app-episode',
  imports: [EpisodeSummaryComponent, RouterLink, DatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export default class HomeComponent {
  private _episodes = inject(Episodes);
  private _router = inject(Router);
  episodes = this._episodes.episodes;

  goto(episode: ContentFile<Episode>) {
    this._router.navigateByUrl(`/episodes/${episode.slug}`);
  }
}
