import { Component, OnInit } from '@angular/core';
import { ChapterChunk } from 'src/app/chapter-chunk/chapter-chunk.component';

import * as chapter01 from 'src/assets/rune-soldier/book01/chapter01.json';

export interface Chapter {
  chunks: ChapterChunk[];
  chapterTitle: string;
  chapterNumber: number;
  default?: Chapter;
}

@Component({
  selector: 'mw-chapter',
  templateUrl: './chapter.component.html',
  styles:[],
})
export class ChapterComponent implements OnInit {

  public columns:number[];
  public showTn: boolean = false;
  public showJp: boolean = false;

  public chapter: Chapter;

  constructor() { }

  ngOnInit() {
    this.columns = [1];
    // call back-end and request chapter json data, load it in
    this.chapter = this.fakeInitChapter();
  }

  private fakeInitChapter() {
    console.log(chapter01);
    return chapter01;
  }

  public toggleTn() {
    this.showTn = !this.showTn;
  }

  public toggleJp() {
    this.showJp = !this.showJp;
  }

  public getShowHideJpLabel() {
    return this.showJp ? '日本語を隠す' : '日本を表示';
  }

  public getShowHideTnLabel() {
    return this.showTn ? 'Hide Translator\'s Notes' : 'Show Translator\'s Notes';
  }

  // primeng inplace for editing -mw
}
