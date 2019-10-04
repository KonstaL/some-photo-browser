import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { setIsLoading } from '../store/actions/api.actions';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiAddress = 'https://jsonplaceholder.typicode.com';
  private readonly queryLimit = 30;
  private readonly apiSuffix = `?_limit=${this.queryLimit}&_page=`;

  private activeRequest: {[key: number]: boolean} = {};

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
  ) { }

  getPhotos(page = 0): Promise<Photo[]> {
    return this.toPromise(this.http.get<Photo[]>(`${this.apiAddress}/photos${this.apiSuffix}${page}`));
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

  private updateLoadingState(): void {
    const loadingState = Object.keys(this.activeRequest).length > 0;
    this.store.dispatch(setIsLoading({ loadingState }));
  }
}
