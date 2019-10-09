import { createAction, props } from '@ngrx/store';

enum actionTypes {
    setIsLoading = '[Api] set isLoading',
}

export const setIsLoading = createAction(actionTypes.setIsLoading, props<{loadingState: boolean}>());
