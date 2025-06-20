
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Language } from "@/types";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  lang: Language;
}

const heroContent = {
  greeting: { en: "Hello, I'm", de: "Hallo, ich bin" },
  name: { en: "Ryan Adams", de: "Ryan Adams" },
  title: { en: "App Developer", de: "App Entwickler" },
  description: {
    en: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.",
    de: "Ich entwerfe und entwickle Dienstleistungen für Kunden jeder Größe und bin spezialisiert auf die Erstellung stilvoller, moderner Websites, Webdienste und Online-Shops."
  },
  cta: { en: "See My Work", de: "Meine Arbeit Ansehen" },
};

export function HeroSection({ lang }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] lg:min-h-screen flex items-center justify-center relative pt-16 lg:pt-0 overflow-hidden">
      <div className="absolute inset-0 opacity-10 -z-10">
         <Image src="https://placehold.co/1920x1080.png" alt="Abstract background" layout="fill" objectFit="cover" data-ai-hint="abstract tech background" />
      </div>
      <div className="container mx-auto px-4 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
          <div className="md:w-1/2 lg:w-2/5 text-center md:text-left">
            <p className="text-lg md:text-xl text-muted-foreground mb-2">{heroContent.greeting[lang]}</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline text-primary mb-4">
              {heroContent.name[lang]}
            </h1>
            <h2 className="text-2xl md:text-3xl font-headline text-foreground mb-8">
              {heroContent.title[lang]}
            </h2>
            <p className="text-md md:text-lg max-w-xl mx-auto md:mx-0 text-muted-foreground mb-10">
              {heroContent.description[lang]}
            </p>
            <Button size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform duration-200" asChild>
              <Link href="#portfolio">
                {heroContent.cta[lang]} <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2 lg:w-2/5 mt-8 md:mt-0 flex justify-center">
            <Image 
              src="https://placehold.co/400x500.png" 
              alt={heroContent.name[lang] + " portrait"}
              width={400} 
              height={500} 
              className="rounded-lg shadow-2xl object-cover transform transition-all duration-500 hover:scale-105"
              data-ai-hint="developer portrait"
              priority 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

