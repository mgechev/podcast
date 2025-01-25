import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContentFile } from '@analogjs/content';

import { NgxCircularPlayerComponent } from './ngx-circular-player.component';
import { Episode } from './episodes';

@Component({
  selector: 'app-episode-summary',
  imports: [NgxCircularPlayerComponent, RouterLink],
  templateUrl: './episode-summary.component.html',
  styleUrls: ['./episode-summary.component.css']
})
export class EpisodeSummaryComponent {
  private _router = inject(Router);
  episode = input<ContentFile<Episode | Record<string, never>>>();
  showPlayer = input(true);

  get preview() {
    return this._router.routerState.snapshot.url !== `/episodes/${this.episode()?.slug}`;
  }
}
