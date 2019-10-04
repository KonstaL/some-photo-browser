import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

import * as fromApi from './reducers/api.reducer';

export interface AppState {
    readonly api: fromApi.State;
}

export const reducers: ActionReducerMap<AppState> = {
  api: fromApi.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const selectApiState = (state: AppState) => state.api;

export const selectIsLoading = createSelector(selectApiState, state => state.isLoading);
