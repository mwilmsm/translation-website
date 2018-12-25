import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';

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
        style({ transform: 'translateX(50%)', opacity: 0 }),
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        animate(('250ms ease-in'), style({
          height: 0,
          opacity: 0,
          transform: 'translateX(50%)'
        }))
      ])
    ])
  ],
})
export class ChapterComponent implements OnInit {

  public columns:number[];

  constructor() { }

  ngOnInit() {
    this.columns = [1, 2, 3];
  }

  addColumn() {
      this.columns.push(this.columns.length);
  }

  removeColumn() {
      this.columns.splice(-1, 1);
  }

  // primeng inplace for editing, flex grid for adding/removing table columns -mw
}
