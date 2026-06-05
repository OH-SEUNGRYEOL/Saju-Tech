export type ActiveScreen = 'home' | 'report' | 'wellness' | 'timeline';

export interface SajuProfile {
  name: string;
  birthDate: string;
  gender: 'male' | 'female';
  solar: boolean;
}

export interface NavigationProps {
  activeScreen: ActiveScreen;
  onNavigate: (screen: ActiveScreen, isPush?: boolean) => void;
}
