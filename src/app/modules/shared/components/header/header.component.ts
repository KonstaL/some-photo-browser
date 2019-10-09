import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppState, selectIsLoading } from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>, private themeService: ThemeService, private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  setTheme(event: MatSlideToggleChange) {
    const darkMode = event.checked;
    if (darkMode) {
      this.themeService.setTheme(darkMode);
    } else {
      setTimeout(() => (event.source.checked = !event.checked), 300);
      this.snackbar.open('Once you go black, you never go back', '', {
        duration: 3000,
      });
    }
  }
}
