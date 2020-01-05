import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-episode',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  episodes = [];

  constructor(private _srs: ScullyRoutesService) {}

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
}
