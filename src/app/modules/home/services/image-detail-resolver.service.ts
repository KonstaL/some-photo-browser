import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppState, selectPhotoById } from 'app/modules/shared/store';
import { Store } from '@ngrx/store';
import { switchMap, tap, mapTo, take } from 'rxjs/operators';
import { loadSingleSuccess } from 'app/modules/shared/store/actions/photo.actions';
import { PhotoId } from 'app/modules/shared/models/photo';
import { ApiService } from 'app/modules/shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class ImageDetailResolverService implements Resolve<any> {
  constructor(private store: Store<AppState>, private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const id = route.paramMap.get('id');
    console.log('starting to resolve photo..');

    return this.store.select(selectPhotoById(id)).pipe(
      take(1),
      switchMap(photo => {
        if (!photo) {
          return this.apiService.getSinglePhoto(id as PhotoId).pipe(
            tap(res => this.store.dispatch(loadSingleSuccess({ response: res }))),
            mapTo(true)
          );
        }
        return of(true);
      })
    );
  }
}
