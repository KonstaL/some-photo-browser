import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/modules/shared/services/api.service';
import { Store } from '@ngrx/store';
import { AppState, selectIsLoading, selectPhotos } from 'app/modules/shared/store';
import { Observable } from 'rxjs';
import { Photo } from 'app/modules/shared/models/photo';
import { loadInitial } from 'app/modules/shared/store/actions/photo.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  photos$: Observable<Photo[]>;

  isLoading$: Observable<boolean>;

  constructor(private apiService: ApiService, private store: Store<AppState>) {
    this.startRequest();
  }

  ngOnInit() {
    this.photos$ = this.store.select(selectPhotos);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  startRequest() {
    this.store.dispatch(loadInitial());
  }
}
