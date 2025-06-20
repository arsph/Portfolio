export type Language = 'en' | 'de';

export interface Content {
  en: string;
  de: string;
}

export interface NavItem {
  id: string;
  label: Content;
  href: string;
}
