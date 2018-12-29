import { Component, Input } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';

export interface ChapterChunk {
  translatedText: string;
  translatorsNotes?: string;
  originalText: string;
}

@Component({
  selector: 'mw-chapter-chunk',
  templateUrl: './chapter-chunk.component.html',
  styles: [],
  
  animations: [
    trigger('animation', [
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => *', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('400ms ease-out')
      ]),
      transition('* => void', [
        animate(('400ms ease-in'), style({
          height: 0,
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ],
})
export class ChapterChunkComponent {
  @Input() public chunk: ChapterChunk;
  @Input() public showTn: boolean = false;
  @Input() public showJp: boolean = false;

  constructor() { }

  public getNumColumns() {
    let i = 1;
    if (this.showJp) { i++; };
    if (this.showTn) { i++; };
    return i;
  }
}
