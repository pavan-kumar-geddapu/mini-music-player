import { Component, ViewChild, ElementRef } from '@angular/core';
import { AudioService } from './audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild("documentSection")
    private documentSection: ElementRef;
    private progressBarWidth: number;
    public ngAfterViewInit(): void {
        this.progressBarWidth = this.documentSection.nativeElement.offsetWidth;
    }

    constructor(public audioService : AudioService) {}

    

    setBarWidth() {
      let style = {
        'width' : this.audioService.getPercentElapsed()+'%'
      }
      return style;
    }

    seekSong(event:any){
      let updateWidth = Math.floor((event.offsetX/this.progressBarWidth)*this.audioService.audio.duration);
      this.audioService.seekAudio(updateWidth);
    }
}
