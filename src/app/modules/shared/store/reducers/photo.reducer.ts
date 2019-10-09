import { Action, createReducer, on } from '@ngrx/store';
import * as photoActions from '../actions/photo.actions';
import { Photo } from '../../models/photo';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface State extends EntityState<Photo> {
  currentPage: number;
}

export const adapter: EntityAdapter<Photo> = createEntityAdapter<Photo>({
  selectId: photo => photo.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  currentPage: 0,
});

const apiReducer = createReducer(
  initialState,
  on(photoActions.loadInitialSuccess, (state, { response }) => ({ ...adapter.addAll(response, state), currentPage: 0 })),
  on(photoActions.loadNextSuccess, (state, { response }) => ({ ...adapter.addMany(response, state), currentPage: state.currentPage++ }))
);

export function reducer(state: State | undefined, action: Action) {
  return apiReducer(state, action);
}
