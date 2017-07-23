import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as book from '../actions/book';
import * as photo from '../actions/photo';
import { Book } from '../models/book';
import {Photo} from '../models/photo';


@Component({
  selector: 'bc-find-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-search [query]="searchQuery$ | async" 
                    [searching]="loading$ | async" 
                    (search)="search($event)">
    </bc-book-search> 
    <bc-photo-search [query]="searchQuery$ | async" 
                     [searching]="loading$ | async" 
                    (search)="searchPhotos($event)">
    </bc-photo-search>
    <h1>fotos: </h1>
    <div *ngFor = "let photo of photos$ | async">
      <div>id: {{photo.id}}</div>
      <div>description: {{photo.description}}</div>
      <div>content: {{photo.content}}</div>
    </div>
    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>

  `
})
export class FindBookPageComponent {
  searchQuery$: Observable<string>;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  photos$: Observable<Photo[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.searchQuery$ = store.select(fromRoot.getSearchQuery).take(1);
    this.books$ = store.select(fromRoot.getSearchResults);
    this.loading$ = store.select(fromRoot.getSearchLoading);
    this.photos$ = store.select(st => st.photos.photos);
  }

  search(query: string) {
    this.store.dispatch(new book.SearchAction(query));
  }

  searchPhotos(query: string) {
    this.store.dispatch(new photo.SearchAction(query));
  }
}
