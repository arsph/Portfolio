"use client";

import { useState, useEffect } from "react";
import type { Language, NavItem } from "@/types";
import { Sidebar } from "@/components/layout/Sidebar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const navItemsData: NavItem[] = [
  { id: "hero", label: { en: "Home", de: "Startseite" }, href: "#hero" },
  { id: "about", label: { en: "About Me", de: "Über Mich" }, href: "#about" },
  { id: "resume", label: { en: "Resume", de: "Lebenslauf" }, href: "#resume" },
  { id: "services", label: { en: "Services", de: "Dienstleistungen" }, href: "#services" },
  { id: "skills", label: { en: "Skills", de: "Fähigkeiten" }, href: "#skills" },
  { id: "portfolio", label: { en: "Portfolio", de: "Portfolio" }, href: "#portfolio" },
  { id: "contact", label: { en: "Contact", de: "Kontakt" }, href: "#contact" },
];

export default function PortfolioPageClient() {
  const [currentLang, setCurrentLang] = useState<Language>("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollTop]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background relative">
      <Sidebar
        currentLang={currentLang}
        onLangChange={handleLangChange}
        navItems={navItemsData}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      
      <main className={`flex-1 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'blur-sm pointer-events-none' : ''} lg:ml-80`}>
        {/* Add pt-16 for mobile header height, lg:pt-0 to reset on large screens if needed */}
        <div className="lg:pt-0 space-y-12 md:space-y-16 lg:space-y-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 xl:px-12">
          <HeroSection lang={currentLang} />
          <AboutSection lang={currentLang} />
          <ResumeSection lang={currentLang} />
          <ServicesSection lang={currentLang} />
          <SkillsSection lang={currentLang} />
          <PortfolioSection lang={currentLang} />
          <ContactSection lang={currentLang} />
        </div>
      </main>

      {showScrollTop && (
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 bg-accent text-accent-foreground rounded-full shadow-lg z-50 hover:bg-accent/90"
          onClick={scrollTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
