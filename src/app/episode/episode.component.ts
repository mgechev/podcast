import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Episode } from '../shared/episode-summary.component';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
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
            .map((e, idx) => ({ ...e, number: idx }))
            .filter(c => c.route === this._router.routerState.snapshot.url)
            .pop()
        )
      )
      .subscribe((c: Episode) => {
        this.currentEpisode = c;
      });
  }
}
