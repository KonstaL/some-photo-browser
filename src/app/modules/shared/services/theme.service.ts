import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  setTheme(darkMode: boolean) {
    if (darkMode) {
      document.querySelector('body').classList.add('dark-theme');
    } else {
      document.querySelector('body').classList.remove('dark-theme');
    }
  }
}
