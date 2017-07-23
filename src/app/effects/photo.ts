import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as photo from '../actions/photo';
import {empty} from 'rxjs/observable/empty';
import {of} from 'rxjs/observable/of';

@Injectable()
export class PhotoEffects {

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(photo.SEARCH)
    .map(toPayload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }

      const rand = Math.floor(Math.random() * (100));
      return Observable.of(
        [
          {id: 'photo' + rand.toString(), description: 'photo_descr', content: 'photo_content'},
          {id: 'photo2' + rand.toString(), description: 'photo_descr2', content: 'photo_content2'}
        ]
      )
        .map(photos => new photo.SearchCompleteAction(photos))
        .catch(() => of(new photo.SearchCompleteAction([])));
    });

  constructor(private actions$: Actions) { }

}
