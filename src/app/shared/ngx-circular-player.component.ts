import {
  Component,
  ElementRef,
  input,
  viewChild,
  afterRenderEffect
} from '@angular/core';

const RADIUS = 50;

@Component({
  selector: 'ngx-circular-player',
  templateUrl: './ngx-circular-player.component.html',
  styleUrls: ['./ngx-circular-player.component.css'],
})
export class NgxCircularPlayerComponent {
  radius = input(120);
  stroke = input(20);
  innerStroke = input(2);
  source = input('');
  strokeColor = input('#fff');
  progressStrokeColor = input('#858585');
  innerStrokeColor = input('#eee');

  audio = viewChild<ElementRef>('audio');
  progress = viewChild<ElementRef>('progress');

  playing = false;

  toggle() {
    this.playing = !this.playing;
    if (this.playing) {
      this.audio()?.nativeElement.play();
    } else {
      this.audio()?.nativeElement.pause();
    }
  }

  get arrowStyle() {
    const topWidth = this.radius() / 8;
    const bottomWidth = this.radius() / 8;
    const leftWidth = this.radius() / 5;
    return {
      'border-top-width': `${topWidth}px`,
      'border-bottom-width': `${bottomWidth}px`,
      'border-left-width': `${leftWidth}px`
    };
  }

  constructor() {
    afterRenderEffect(() => {
      const progress = this.progress()?.nativeElement;
      // During SSR we don't need to do anything special here.
      if (!progress || typeof progress.getTotalLength !== 'function') {
        return;
      }
      const totalLength = progress.getTotalLength();
      const audio = this.audio()?.nativeElement as HTMLAudioElement;
      progress.setAttribute('stroke-dasharray', totalLength);
      progress.setAttribute('stroke-dashoffset', totalLength);
      audio.addEventListener('pause', () => (this.playing = false));
      audio.addEventListener('play', () => (this.playing = true));
      audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const maxduration = audio.duration;
        const calc = totalLength - (currentTime / maxduration) * totalLength;

        progress.setAttribute('stroke-dashoffset', calc);
      });
    });
  }

  seek(evnt: MouseEvent) {
    const ratio = this._calculateAngle(evnt) / 360;
    const audio = this.audio()?.nativeElement as HTMLAudioElement;
    const seekTo = ratio * audio.duration;
    audio.currentTime = seekTo;
  }

  get centerX() {
    return 50;
  }

  get centerY() {
    return 50;
  }

  get circleRadius() {
    return 32;
  }

  get pauseLeftBarSize() {
    return {
      width: `${this.radius() / 10}px`,
      height: `${this.radius() / 3.5}px`,
      left: `calc(50% - ${this.radius() / 12}px)`
    };
  }

  get pauseRightBarSize() {
    return {
      width: `${this.radius() / 10}px`,
      height: `${this.radius() / 3.5}px`,
      left: `calc(50% + ${this.radius() / 12}px)`
    };
  }

  get playButtonRadius() {
    return this.radius() - this.radius() / 3 + 'px';
  }

  private _calculateAngle(evnt: MouseEvent) {
    const x = (RADIUS * 2) / (this.radius() / evnt.offsetX);
    const y = (RADIUS * 2) / (this.radius() / evnt.offsetY);
    const slope = (RADIUS - y) / (RADIUS - x);
    const angle = 180 * (Math.abs(Math.atan(slope)) / Math.PI);

    if (x <= RADIUS && y >= RADIUS) {
      return angle;
    }
    if (x > RADIUS && y >= RADIUS) {
      return 180 - angle;
    }
    if (x > RADIUS && y <= RADIUS) {
      return 180 + angle;
    }
    return 180 + (180 - angle);
  }
}