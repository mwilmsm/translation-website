import { Component, OnInit } from '@angular/core';
import { ChapterChunk } from 'src/app/chapter-chunk/chapter-chunk.component';

export interface Chapter {
  chunks: ChapterChunk[];
  title: string;
  chapterNumber: number;
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
    return {
      title: 'This is Chapter 1',
      chapterNumber: 1,
      chunks: [
        {
          translatedText: 'This text is translated',
          translatorsNotes: 'This is the first translator\'s note.',
          originalText: 'This is the first original text block.',
        },
        {
          translatedText: 'This text is the second translated text',
          originalText: 'This is the second original text block.',
        },
      ]
    }
  }

  public toggleTn() {
    this.showTn = !this.showTn;
  }

  public toggleJp() {
    this.showJp = !this.showJp;
  }

  // primeng inplace for editing -mw
}
