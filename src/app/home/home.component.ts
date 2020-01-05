import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-episode',
  template: `
    <app-episode-summary [episode]="episodes[episodes.length - 1]"></app-episode-summary>

    <h1>Previous Episodes</h1>

    <article *ngFor="let episode of episodes.slice(0, episodes.length - 1)">
      <h2>{{ episode.title || episode.route }}</h2>
      <h4>{{ episode.published | date: 'shortDate' }}</h4>
      <p>{{ episode.description }}</p>
      <p><a [routerLink]="episode.route">Read more</a></p>
    </article>
  `,
  styles: [`
  h1 {
    font-weight: 400;
    font-size: 3em;
    text-align: center;
  }

  h2 {
    font-size: 1.8em;
    font-weight: 300;
  }

  article {
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 5px;
    font-size: 1.2em;
    width: 60%;
    max-width: 1200px;
    min-width: 400px;
    margin: auto;
  }

  a {
    color: #222;
  }

  a:hover {
    color: #000;
  }
  `],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  episodes = [];

  constructor(private _srs: ScullyRoutesService) {}

  ngOnInit() {
    this._srs.available$.pipe(
      map(routeList =>
        routeList
          .filter((route: ScullyRoute) => route.route.startsWith(`/episode/`))
          .map((e, idx) => ({...e, number: idx + 1}))
      )
    ).subscribe(episodes => this.episodes = episodes);
  }
}
