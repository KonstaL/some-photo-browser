import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {
    // Since this "once you go black" thing is joke, this isn't implemented properly
    // If theming was a serious feature, the last theme would be stored to ngrx and persisted there to localstorage
    const isDarkTheme = sessionStorage.getItem('isDarkTheme');
    if (isDarkTheme) {
      this.setTheme(true);
    }
  }

  setTheme(darkMode: boolean) {
    if (darkMode) {
      document.querySelector('body').classList.add('dark-theme');
      const isDarkTheme = sessionStorage.setItem('isDarkTheme', 'yuup');
    } else {
      document.querySelector('body').classList.remove('dark-theme');
    }
  }
}
