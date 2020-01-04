import { Component, Input } from '@angular/core';

interface Episode {
  title: string;
  description: string;
  url: string;
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
    </section>
    <summary>
      {{ episode.description }}
    </summary>
  `,
  styleUrls: ['./episode-summary.component.css']
})
export class EpisodeSummaryComponent {
  @Input() episode: Episode;
}
