import { Component, OnInit } from '@angular/core';
import { Photo } from 'app/modules/shared/models/photo';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState, selectPhotoById } from 'app/modules/shared/store';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
})
export class PhotoDetailComponent implements OnInit {
  photo$: Observable<Photo>;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.photo$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.store.select(selectPhotoById(params.get('id')))));
  }
}
