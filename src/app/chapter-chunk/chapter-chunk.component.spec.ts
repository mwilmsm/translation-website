import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterChunkComponent } from './chapter-chunk.component';

describe('ChapterChunkComponent', () => {
  let component: ChapterChunkComponent;
  let fixture: ComponentFixture<ChapterChunkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterChunkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
