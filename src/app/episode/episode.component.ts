import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Episode } from '../shared/episode-summary.component';
import { Episodes } from '../shared/episodes';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class EpisodeComponent implements OnInit {
  currentEpisode: Episode;
  constructor(private _episodes: Episodes, private _router: Router) {}

  ngOnInit() {
    this._episodes.episodes$.subscribe(
      episodes =>
        (this.currentEpisode = episodes.filter(
          e => e.route === this._router.routerState.snapshot.url
        ).pop())
    );
  }
}
