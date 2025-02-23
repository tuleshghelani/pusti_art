import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  surface: string;
}

const lightTheme: ThemeColors = {
  primary: '#55A0A4',
  secondary: '#A03A88',
  accent: '#FFD700',
  background: '#ffffff',
  text: '#1a1a1a',
  surface: '#f8f9fa'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private colors = new BehaviorSubject<ThemeColors>(lightTheme);
  colors$ = this.colors.asObservable();

  updateColors(colors: Partial<ThemeColors>) {
    this.colors.next({ ...this.colors.value, ...colors });
  }
}
