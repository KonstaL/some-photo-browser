import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { setIsLoading } from '../store/actions/api.actions';
import { Photo, PhotoId } from '../models/photo';
import { tap, catchError } from 'rxjs/operators';
import { Album, AlbumId } from '../models/album';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiAddress = 'https://jsonplaceholder.typicode.com';
  private readonly queryLimit = 30;
  private readonly apiSuffix = `?_limit=${this.queryLimit}&_page=`;

  private activeRequest: { [key: number]: boolean } = {};

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getPhotos(page = 0) {
    return this.setLoaderWrapper(this.http.get<Photo[]>(`${this.apiAddress}/photos${this.apiSuffix}${page}`));
  }

  getPhotosByAlbum(id: AlbumId) {
    return this.setLoaderWrapper(this.http.get<Photo[]>(`${this.apiAddress}/photos?albumId=${id}`));
  }

  getSinglePhoto(id: PhotoId) {
    return this.setLoaderWrapper(this.http.get<Photo>(`${this.apiAddress}/photos/${id}`));
  }

  getSingleAlbum(id: AlbumId) {
    return this.setLoaderWrapper(this.http.get<Album>(`${this.apiAddress}/albums/${id}`));
  }

  toPromise<T>(obs: Observable<T>): Promise<T> {
    const currentTime = Date.now();
    this.activeRequest[currentTime] = true;

    this.updateLoadingState();

    return obs.toPromise().finally(() => {
      delete this.activeRequest[currentTime];
      this.updateLoadingState();
    });
  }

  setLoaderWrapper<T>(obs: Observable<T>) {
    const currentTime = Date.now();
    this.activeRequest[currentTime] = true;
    this.updateLoadingState();
    return obs.pipe(
      tap(() => {
        delete this.activeRequest[currentTime];
        this.updateLoadingState();
      }),
      catchError(err => {
        delete this.activeRequest[currentTime];
        this.updateLoadingState();
        return EMPTY;
      })
    );
  }

  private updateLoadingState(): void {
    const loadingState = Object.keys(this.activeRequest).length > 0;
    this.store.dispatch(setIsLoading({ loadingState }));
  }
}
