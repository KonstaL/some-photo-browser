import { createAction, props } from '@ngrx/store';
import { AlbumId, Album } from '../../models/album';

enum actionTypes {
  loadSingle = '[Album] load single',
  loadSingleFailure = '[Album] load single failure',
  loadSingleSuccess = '[Album] load single success',
}

export const loadSingle = createAction(actionTypes.loadSingle, props<{ albumId: AlbumId }>());
export const loadSingleSuccess = createAction(actionTypes.loadSingleSuccess, props<{ response: Album }>());
export const loadSingleFailure = createAction(actionTypes.loadSingleFailure); // TODO: Add proper failure handling
