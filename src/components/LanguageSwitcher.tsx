"use client";

import type { Language } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

export function LanguageSwitcher({ currentLang, onLangChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center space-x-1 p-1 bg-muted rounded-lg">
      <Button
        variant={currentLang === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLangChange('en')}
        className={cn("transition-all", currentLang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground')}
        aria-pressed={currentLang === 'en'}
      >
        EN
      </Button>
      <Button
        variant={currentLang === 'de' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLangChange('de')}
        className={cn("transition-all", currentLang === 'de' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground')}
        aria-pressed={currentLang === 'de'}
      >
        DE
      </Button>
    </div>
  );
}
