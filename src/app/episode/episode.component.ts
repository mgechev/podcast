import { Component, ViewEncapsulation, OnInit } from '@angular/core';
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
  constructor(private _episodes: Episodes) {}

  ngOnInit() {
    this._episodes.episodes$.subscribe(episodes => this.currentEpisode = episodes.shift());
  }
}
