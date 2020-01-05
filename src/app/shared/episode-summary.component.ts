import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Episode {
  title: string;
  description: string;
  route: string;
  number: number;
  audio: string;
}

@Component({
  selector: 'app-episode-summary',
  templateUrl: './episode-summary.component.html',
  styleUrls: ['./episode-summary.component.css']
})
export class EpisodeSummaryComponent {
  @Input() episode: Episode;
  @Input() showPlayer = true;

  constructor(private _router: Router) {}

  get preview() {
    return this._router.routerState.snapshot.url !== this.episode.route;
  }
}
