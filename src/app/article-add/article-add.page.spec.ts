import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAddPage } from './article-add.page';

describe('ArticleAddPage', () => {
  let component: ArticleAddPage;
  let fixture: ComponentFixture<ArticleAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
