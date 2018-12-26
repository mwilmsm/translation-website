import { Component, Input } from '@angular/core';

export interface ChapterChunk {
  translatedText: string;
  translatorsNotes?: string;
  originalText: string;
}

@Component({
  selector: 'mw-chapter-chunk',
  templateUrl: './chapter-chunk.component.html',
})
export class ChapterChunkComponent {
  @Input() public chunk: ChapterChunk;
  @Input() public showTn: boolean = false;
  @Input() public showJp: boolean = false;

  constructor() { }
}
