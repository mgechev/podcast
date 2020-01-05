import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Episode {
  title: string;
  description: string;
  route: string;
  number: number;
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
        source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/f0/b8/fa/f0b8fa78-b63b-34df-c4f2-4156a3a83b38/mzaf_6470951130098414732.plus.aac.ep.m4a"
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
