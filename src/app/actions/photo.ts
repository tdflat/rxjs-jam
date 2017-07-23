import {Action} from '@ngrx/store';
import {Photo} from '../models/photo';
export const SEARCH =           '[Photo] Search';
export const SEARCH_COMPLETE =  '[Photo] Search Complete';


export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Photo[]) { }
}


export type Actions
  = SearchAction
  | SearchCompleteAction;
