import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadSingle, loadSingleSuccess } from '../actions/album.actions';
import { AppState } from '../index';
import { ApiService } from '../../services/api.service';
import { loadAlbumPhotosSuccess } from '../actions/photo.actions';

@Injectable()
export class AlbumEffects {
  singleAlbumLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSingle),
      switchMap(action =>
        this.apiService.getSingleAlbum(action.albumId).pipe(
          map(res => loadSingleSuccess({ response: res })),
          catchError(() => EMPTY) // TODO: Figure out proper error handling
        )
      ),
      switchMap(req => {
        return this.apiService.getPhotosByAlbum(req.response.id).pipe(
          map(res => loadAlbumPhotosSuccess({ response: res })),
          catchError(() => EMPTY) // TODO: Figure out proper error handling
        );
      })
    )
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private apiService: ApiService) {}
}
