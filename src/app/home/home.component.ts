import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { Episode } from '../shared/episode-summary.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  episodes = [];

  constructor(private _srs: ScullyRoutesService, private _router: Router) {}

  ngOnInit() {
    this._srs.available$
      .pipe(
        map(routeList =>
          routeList
            .filter((route: ScullyRoute) => route.route.startsWith(`/episode/`))
            .map((e, idx) => ({ ...e, number: idx + 1 }))
        )
      )
      .subscribe(episodes => (this.episodes = episodes));
  }

  goto(episode: Episode) {
    this._router.navigateByUrl(episode.route);
  }
}
