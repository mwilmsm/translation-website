import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';

export interface ChapterChunk {
  translatedText: string;
  translatorsNotes: string;
  originalText: string;
}

export interface Chapter {
  chunks: ChapterChunk[];
}

@Component({
  selector: 'mw-chapter',
  templateUrl: './chapter.component.html',
  styles:[],
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
export class ChapterComponent implements OnInit {

  public columns:number[];
  public showTn: boolean = false;
  public showJp: boolean = false;

  constructor() { }

  ngOnInit() {
    this.columns = [1];
    // call back-end and request chapter json data, load it in
  }

  addColumn() {
      this.columns.push(this.columns.length);
  }

  removeColumn() {
      this.columns.splice(-1, 1);
  }

  public toggleTn() {
    this.showTn = !this.showTn;
  }

  public toggleJp() {
    this.showJp = !this.showJp;
  }

  // primeng inplace for editing -mw
}
