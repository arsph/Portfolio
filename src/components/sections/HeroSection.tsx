
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
  greeting: { en: "Hi, I'm", de: "Hi, ich bin" },
  name: { en: "Arsalan Parham", de: "Arsalan Parham" },
  title: { en: "Software Developer", de: "Software Entwickler" },
  description: {
    en: "I am a software developer with experience in frontend development and studied data science and software engineering. I enjoy learning new things and sharing them with the team members and can speak three different languages: English, German and Persian.",
    de: "Ich bin Softwareentwickler mit Erfahrung in der Frontend-Entwicklung und habe Data Science und Software Engineering studiert. Ich lerne gerne Neues und teile es mit den Teammitgliedern. Ich spreche drei verschiedene Sprachen: Englisch, Deutsch und Persisch."
  },
  cta: { en: "See My Work", de: "Meine Projekte Ansehen" },
};

export function HeroSection({ lang }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] lg:min-h-screen flex items-center justify-center relative pt-16 lg:pt-0 overflow-hidden">
      {/* Background Image - Replace with your own image */}
      <div className="absolute inset-0 opacity-10 -z-10">
         <Image src="/images/profile.jpg" alt="Abstract background" layout="fill" objectFit="cover" data-ai-hint="abstract tech background" />
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
            {/* Profile Image - Replace with your own image */}
            <Image 
              src="/images/profile.jpg" 
              alt={heroContent.name[lang] + " portrait"}
              width={400} 
              height={500} 
              className="rounded-lg shadow-2xl object-cover object-top transform transition-all duration-500 hover:scale-105"
              priority 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

