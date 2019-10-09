import { createAction, props } from '@ngrx/store';
import { Photo, PhotoId } from '../../models/photo';

enum actionTypes {
  loadInitial = '[Photo] load initial photos',
  loadInitialSuccess = '[Photo] load initial photos success',
  loadInitialFailure = '[Photo] load initial photos failure',

  loadPage = '[Photo] load page of photos',
  loadPageSuccess = '[Photo] load page success',
  loadPageFailure = '[Photo] load page failure',

  loadSingle = '[Photo] load single',
  loadSingleFailure = '[Photo] load single failure',
  loadSingleSuccess = '[Photo] load single success',
}

export const loadInitial = createAction(actionTypes.loadInitial);
export const loadInitialSuccess = createAction(actionTypes.loadInitialSuccess, props<{ response: Photo[] }>());
export const loadInitialFailure = createAction(actionTypes.loadInitialFailure); // TODO: Add proper failure handling

export const loadNext = createAction(actionTypes.loadPage, props<{ pageNum: number }>());
export const loadNextSuccess = createAction(actionTypes.loadPageSuccess, props<{ response: Photo[] }>());
export const loadNextFailure = createAction(actionTypes.loadPageFailure); // TODO: Add proper failure handling

export const loadSingle = createAction(actionTypes.loadSingle, props<{ photoId: PhotoId | string }>());
export const loadSingleSuccess = createAction(actionTypes.loadSingleSuccess, props<{ response: Photo }>());
export const loadSingleFailure = createAction(actionTypes.loadSingleFailure); // TODO: Add proper failure handling
