import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { Episode } from '../shared/episode-summary.component';
import { Router } from '@angular/router';
import { Episodes } from '../shared/episodes';

const dateRe = /(\d\d?-\d\d?-\d\d\d\d)/;

@Component({
  selector: 'app-episode',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  episodes = [];

  constructor(private _episodes: Episodes, private _router: Router) {}

  ngOnInit() {
    this._episodes.episodes$.subscribe(episodes => (this.episodes = episodes));
  }

  goto(episode: Episode) {
    this._router.navigateByUrl(episode.route);
  }
}
