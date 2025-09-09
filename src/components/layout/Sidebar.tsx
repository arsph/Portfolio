"use client";

import Link from "next/link";
import { Home, User, Briefcase, Star, FolderGit, Send, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SocialLinks } from "@/components/SocialLinks";
import type { Language, NavItem, Content } from "@/types";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface SidebarProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  navItems: NavItem[];
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const content = {
  name: { en: "Arsalan Parham", de: "Arsalan Parham" },
  title: { en: "Software Developer", de: "Software Entwickler" },
  freelance: { en: "Open to Work", de: "Offen für Arbeit" },
};

export function Sidebar({ currentLang, onLangChange, navItems, isMobileMenuOpen, toggleMobileMenu }: SidebarProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const getIcon = (id: string) => {
    switch (id) {
      case "hero": return <Home className="h-5 w-5" />;
      case "about": return <User className="h-5 w-5" />;
      case "resume": return <Briefcase className="h-5 w-5" />;
      case "skills": return <Star className="h-5 w-5" />;
      case "portfolio": return <FolderGit className="h-5 w-5" />;
      case "contact": return <Send className="h-5 w-5" />;
      default: return <Home className="h-5 w-5" />;
    }
  };
  
  if (!mounted) {
    return ( // Placeholder for SSR to avoid hydration mismatch for isMobileMenuOpen
      <aside className="lg:w-80 lg:flex-shrink-0 bg-sidebar text-sidebar-foreground shadow-2xl">
        <div className="p-6 space-y-6 h-full flex flex-col">
          {/* Skeleton or minimal static content */}
        </div>
      </aside>
    );
  }

  const sidebarContent = (
    <>
      <LanguageSwitcher currentLang={currentLang} onLangChange={onLangChange} />

      <div className="text-center">
        <h1 className="text-3xl font-headline text-primary">{content.name[currentLang]}</h1>
        <p className="text-sm text-muted-foreground">{content.title[currentLang]}</p>
      </div>

      <div className="bg-muted/50 p-3 text-center rounded-lg shadow-inner">
        <span className="font-medium text-accent">{content.freelance[currentLang]}</span>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
            asChild
            onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}
          >
            <Link href={item.href}>
              {getIcon(item.id)}
              <span className="ml-3">{item.label[currentLang]}</span>
            </Link>
          </Button>
        ))}
      </nav>

      <SocialLinks className="justify-center" />
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0 lg:left-0 bg-sidebar text-sidebar-foreground shadow-2xl p-6 space-y-6 z-20">
        {sidebarContent}
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 bg-sidebar text-sidebar-foreground p-4 shadow-md z-30 flex justify-between items-center">
        <h1 className="text-xl font-headline text-primary">{content.name[currentLang]}</h1>
        <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-sidebar text-sidebar-foreground z-20 p-6 space-y-6 flex flex-col animate-fade-in">
          <div className="flex justify-end">
             <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Close menu">
               <X className="h-6 w-6" />
            </Button>
          </div>
          {sidebarContent}
        </div>
      )}
    </>
  );
}
