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
  template: `
    <section *ngIf="episode">
      <h1>
        <span>Episode #{{ episode.number }}</span
        ><br />{{ episode.title }}
      </h1>
      <app-player
        *ngIf="showPlayer"
        [source]="episode.audio"
        width="120"
      ></app-player>
    </section>
    <summary *ngIf="episode">
      {{ episode.description }}
      <a *ngIf="preview" [routerLink]="episode.route">Read more</a>
    </summary>
  `,
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
