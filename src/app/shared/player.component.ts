import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

const RADIUS = 50;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements AfterViewInit {
  @Input() width = 120;
  @Input() source: string;

  @ViewChild('audio') audio: ElementRef;
  @ViewChild('progress') progress: ElementRef;

  playing = false;

  toggle() {
    this.playing = !this.playing;
    if (this.playing) {
      this.audio.nativeElement.play();
    } else {
      this.audio.nativeElement.pause();
    }
  }

  ngAfterViewInit() {
    const progress = this.progress.nativeElement;
    const totalLength = progress.getTotalLength();
    const audio = this.audio.nativeElement;
    progress.setAttribute('stroke-dasharray', totalLength);
    progress.setAttribute('stroke-dashoffset', totalLength);
    this.audio.nativeElement.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime;
      const maxduration = audio.duration;
      const calc = totalLength - (currentTime / maxduration) * totalLength;

      progress.setAttribute('stroke-dashoffset', calc);
    });
  }

  seek(evnt: MouseEvent) {
    const ratio = this._calculateAngle(evnt) / 360;
    const audio = this.audio.nativeElement as HTMLAudioElement;
    const seekTo = ratio * audio.duration;
    audio.currentTime = seekTo;
  }

  private _calculateAngle(evnt: MouseEvent) {
    const x = (RADIUS * 2) / (this.width / evnt.offsetX);
    const y = (RADIUS * 2) / (this.width / evnt.offsetY);
    const slope = (RADIUS - y) / (RADIUS - x);
    const angle = 180 * (Math.abs(Math.atan(slope)) / Math.PI);

    if (x < RADIUS && y > RADIUS) {
      return angle;
    }
    if (x > RADIUS && y > RADIUS) {
      return 180 - angle;
    }
    if (x > RADIUS && y < RADIUS) {
      return 180 + angle;
    }
    return 180 + (180 - angle);
  }
}
