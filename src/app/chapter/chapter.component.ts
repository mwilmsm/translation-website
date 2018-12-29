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
          translatedText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis neque mauris.
            Maecenas eget sagittis nisi, efficitur fermentum felis. Suspendisse sodales urna sed ex sodales, 
            feugiat feugiat enim aliquam. Curabitur sed tincidunt felis. Nam fringilla at enim pulvinar mattis.
            Donec commodo maximus quam a posuere. Vestibulum cursus ipsum id hendrerit euismod. Maecenas posuere,
            lacus sit amet posuere ultricies, libero lectus dignissim orci, a dapibus arcu turpis ut odio.
            Phasellus sodales elit in dolor fermentum, sit amet consequat augue porta. Nunc ultricies, arcu a ornare
            aliquam, est sem dignissim neque, in elementum magna velit vel magna. Donec auctor felis in semper
            condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce mi nulla, tempor
            tristique cursus sed, congue ut mi.`,
          translatorsNotes: 'This is the first translator\'s note.',
          originalText: 'This is the first original text block.',
        },
        {
          translatedText: 'This text is the second translated text',
          originalText: 'This is the second original text block.',
        },
        {
          translatedText: 'This text is translated',
          translatorsNotes: 'This is the second translator\'s note.',
          originalText: 'This is the third original text block.',
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

  public getShowHideJpLabel() {
    return this.showJp ? '日本語を隠す' : '日本を表示';
  }

  public getShowHideTnLabel() {
    return this.showTn ? 'Hide Translator\'s Notes' : 'Show Translator\'s Notes';
  }

  // primeng inplace for editing -mw
}
