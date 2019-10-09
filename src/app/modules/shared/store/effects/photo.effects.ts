import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadInitial, loadInitialSuccess, loadSingle, loadNext, loadNextSuccess } from '../actions/photo.actions';
import { AppState } from '../index';
import { ApiService } from '../../services/api.service';

@Injectable()
export class PhotoEffects {
  initLoadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInitial.type),
      switchMap(() =>
        this.apiService.getPhotos().pipe(
          map(res => loadInitialSuccess({ response: res })),
          catchError(() => EMPTY) // TODO: Figure out proper error handling
        )
      )
    )
  );

  loadMorePhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType<any>(loadNext.type),
      switchMap(action =>
        this.apiService.getPhotos(action.pageNum).pipe(
          map(res => loadNextSuccess({ response: res })),
          catchError(() => EMPTY) // TODO: Figure out proper error handling
        )
      )
    )
  );

  singlePhotoLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSingle.type),
      switchMap(() =>
        this.apiService.getPhotos().pipe(
          map(res => loadInitialSuccess({ response: res })),
          catchError(() => EMPTY) // TODO: Figure out proper error handling
        )
      )
    )
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private apiService: ApiService) {}
}
