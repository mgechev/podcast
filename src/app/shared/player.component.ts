import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

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

  // (x – h)2 + (y – k)2 = r2
  seek(evnt: MouseEvent) {
    const x = evnt.offsetX;
    const y = evnt.offsetY;
    const r = 50;
    const h = 50;
    const k = 50;
    console.log(evnt.offsetX, evnt.offsetY);
  }
}
