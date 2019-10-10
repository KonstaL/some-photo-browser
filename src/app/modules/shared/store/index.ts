import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';

import * as fromApi from './reducers/api.reducer';
import * as fromPhoto from './reducers/photo.reducer';
import { PhotoId } from '../models/photo';
import { AlbumId } from '../models/album';

export interface AppState {
  readonly api: fromApi.State;
  readonly photo: fromPhoto.State;
}

export const reducers: ActionReducerMap<AppState> = {
  api: fromApi.reducer,
  photo: fromPhoto.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const selectApiState = (state: AppState) => state.api;
export const selectPhotoState = (state: AppState) => state.photo;

export const selectIsLoading = createSelector(
  selectApiState,
  state => state.isLoading
);

export const { selectEntities: selectPhotoEntities, selectAll: selectPhotos, selectIds: selectPhotoIds } = fromPhoto.adapter.getSelectors(
  selectPhotoState
);
export const selectPhotoById = (id: PhotoId | string) =>
  createSelector(
    selectPhotoEntities,
    entities => entities[id]
  );

export const selectPhotosByAlbumId = (id: AlbumId | string) =>
  createSelector(
    selectPhotos,
    photos => photos.filter(photo => photo.albumId === id)
  );
