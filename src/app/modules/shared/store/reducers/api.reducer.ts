import { Action, createReducer, on } from '@ngrx/store';
import * as apiActions from '../actions/api.actions';

export interface State {
  isLoading: boolean;
}

export const initialState: State = {
    isLoading: false,
};

const apiReducer = createReducer(
    initialState,
    on(apiActions.setIsLoading, (state, { loadingState }) => ({ ...state, isLoading: loadingState })),
);

export function reducer(state = initialState, action: Action) {
    return apiReducer(state, action);
}