import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/modules/shared/services/api.service';
import { Store } from '@ngrx/store';
import { AppState, selectIsLoading } from 'app/modules/shared/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stuff: any;

  isLoading$: Observable<boolean>;

  constructor(
    private apiService: ApiService,
    private store: Store<AppState>
  ) {
    this.isLoading$ = this.store.select(selectIsLoading);
   }

  ngOnInit() {
  }

  startRequest() {
    this.stuff = this.apiService.getPhotos();
  }

}
