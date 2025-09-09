"use client";

import type { Language } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// Circle flags from https://www.npmjs.com/package/circle-flags
const UKFlag = () => (
  <img 
    src="https://hatscripts.github.io/circle-flags/flags/gb.svg" 
    alt="UK Flag" 
    className="w-10 h-10 p-1 m-1"
  />
);

const GermanFlag = () => (
  <img 
    src="https://hatscripts.github.io/circle-flags/flags/de.svg" 
    alt="German Flag" 
    className="w-10 h-10 p-1 m-1"
  />
);

interface LanguageSwitcherProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

export function LanguageSwitcher({ currentLang, onLangChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center justify-center space-x-1 p-1 bg-muted rounded-lg">
      <Button
        variant={currentLang === 'en' ? 'default' : 'ghost'}
        size="icon"
        onClick={() => onLangChange('en')}
        className={cn("transition-all w-10 h-10 p-0", currentLang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground')}
        aria-pressed={currentLang === 'en'}
        aria-label="Switch to English"
      >
        <UKFlag />
      </Button>
      <Button
        variant={currentLang === 'de' ? 'default' : 'ghost'}
        size="icon"
        onClick={() => onLangChange('de')}
        className={cn("transition-all w-10 h-10 p-0", currentLang === 'de' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground')}
        aria-pressed={currentLang === 'de'}
        aria-label="Switch to German"
      >
        <GermanFlag />
      </Button>
    </div>
  );
}
