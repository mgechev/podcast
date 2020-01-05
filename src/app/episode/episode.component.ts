import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Episode } from '../shared/episode-summary.component';
import { take, filter, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode',
  template: `
    <app-episode-summary [episode]="currentEpisode" [showPlayer]="false"
      ><app-episode-summary> </app-episode-summary
    ></app-episode-summary>
    <section>
      <audio src="" controls></audio>
      {{ currentEpisode | json }}
    </section>
  `,
  styles: [
    `
      section {
        margin-top: 10px;
        padding: 20px;
        border-radius: 5px;
        font-size: 1.2em;
        width: 60%;
        max-width: 1200px;
        min-width: 400px;
        margin: auto;
      }
    `
  ],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class EpisodeComponent implements OnInit {
  currentEpisode: Episode;
  constructor(private _srs: ScullyRoutesService, private _router: Router) {}

  ngOnInit() {
    this._srs.available$
      .pipe(
        map(all =>
          all
            .filter(c => c.route === this._router.routerState.snapshot.url)
            .pop()
        )
      )
      .subscribe((c: Episode) => {
        this.currentEpisode = c;
      });
  }
}
