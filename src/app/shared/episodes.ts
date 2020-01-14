import { Injectable } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Episode } from './episode-summary.component';

const dateRe = /(\d\d?-\d\d?-\d\d\d\d)/;

@Injectable()
export class Episodes {
  constructor(private _srs: ScullyRoutesService) {}

  episodes$ = this._srs.available$.pipe(
    map(routeList => {
      routeList = routeList
        .filter(r => dateRe.test(r.route))
        .sort((a, b) => {
          const adate = dateRe.exec(a.route)[0];
          const bdate = dateRe.exec(b.route)[0];
          return new Date(bdate).getTime() - new Date(adate).getTime();
        });
      return routeList
        .filter((route: ScullyRoute) => route.route.startsWith(`/episode/`))
        .map((e, idx) => ({ ...e, number: routeList.length - idx }));
    })
  ) as Observable<Episode[]>;
}
