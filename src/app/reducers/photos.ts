import {Photo} from '../models/photo';
import * as photo from '../actions/photo';


export interface State {
  photos: Photo[];
};

export const initialState: State = {
  photos: []
};

export function reducer(state = initialState, action: photo.Actions): State {
  switch (action.type) {
    case photo.SEARCH_COMPLETE:
      const photosFound = action.payload;
      return {
        photos: [...photosFound]
      }
    default: {
      return state;
    }
  }
}
