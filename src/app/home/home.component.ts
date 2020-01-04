import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-episode',
  template: `
    <app-episode-summary [episode]="episodes[episodes.length - 1]"></app-episode-summary>

    <h1>Overview of episode posts</h1>

    <a *ngFor="let episode of episodes.slice(0, episodes.length - 1)" [routerLink]="[episode.route]">
      <article>
        <h3>{{ episode.title || episode.route }}</h3>
        <h4>{{ episode.published | date: 'shortDate' }}</h4>
        <p>{{ episode.description }}</p>
      </article>
    </a>
  `,
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  episodes = [];

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {
    this.srs.available$.pipe(
      map(routeList =>
        routeList
          .filter((route: ScullyRoute) => route.route.startsWith(`/episode/`))
          .map((e, idx) => ({...e, number: idx + 1}))
      )
    ).subscribe(episodes => this.episodes = episodes);
  }
}
