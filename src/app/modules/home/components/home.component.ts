import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ApiService } from 'app/modules/shared/services/api.service';
import { Store } from '@ngrx/store';
import { AppState, selectIsLoading, selectPhotos } from 'app/modules/shared/store';
import { Observable } from 'rxjs';
import { Photo } from 'app/modules/shared/models/photo';
import { loadInitial, loadNext } from 'app/modules/shared/store/actions/photo.actions';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('bottom', { static: false }) scrollBottom: ElementRef;

  photos$: Observable<Photo[]>;
  isLoading$: Observable<boolean>;
  private intersectionObs: IntersectionObserver;
  private pageCount = 0;

  constructor(private apiService: ApiService, private store: Store<AppState>) {}

  ngOnInit() {
    this.photos$ = this.store.select(selectPhotos);
    this.isLoading$ = this.store.select(selectIsLoading);

    // check if init is done
    this.photos$.pipe(take(1)).subscribe(photos => {
      if (photos.length === 0) {
        this.store.dispatch(loadInitial());
      }
    });
  }

  ngAfterViewInit() {
    this.intersectionObs = new IntersectionObserver(
      ([entry], obs) => {
        console.log('haloo', entry.isIntersecting);
        if (entry.isIntersecting) {
          this.pageCount++;
          this.loadMore(this.pageCount);
        }
      },
      { root: null, rootMargin: '200px 0px 0px 0px' }
    );

    this.intersectionObs.observe(this.scrollBottom.nativeElement);
  }

  ngOnDestroy() {
    this.intersectionObs.disconnect();
  }

  loadMore(pageNum: number) {
    this.store.dispatch(loadNext({ pageNum }));
  }

  trackByFn(index, item) {
    return item.id;
  }
}
