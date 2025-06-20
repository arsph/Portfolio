"use client";

import { SectionCard } from "@/components/SectionCard";
import type { Language, Content } from "@/types";
import Image from "next/image";

interface AboutSectionProps {
  lang: Language;
}

const content = {
  title: { en: "About Me", de: "Über Mich" },
  paragraph1: {
    en: "Hello! I'm Ryan Adams, a passionate App Developer based in Berlin. With a knack for creating intuitive and performant applications, I thrive on turning complex problems into elegant solutions. My journey in tech has been driven by a constant curiosity and a desire to build things that make a difference.",
    de: "Hallo! Ich bin Ryan Adams, ein leidenschaftlicher App-Entwickler aus Berlin. Mit einem Händchen für die Erstellung intuitiver und leistungsstarker Anwendungen blühe ich darin auf, komplexe Probleme in elegante Lösungen zu verwandeln. Meine Reise in die Technologie wurde von ständiger Neugier und dem Wunsch angetrieben, Dinge zu bauen, die einen Unterschied machen."
  },
  paragraph2: {
    en: "Over the years, I've honed my skills in various technologies, including React, Next.js, Node.js, and mobile development platforms. I believe in continuous learning and am always exploring new tools and frameworks to stay at the forefront of innovation.",
    de: "Im Laufe der Jahre habe ich meine Fähigkeiten in verschiedenen Technologien verfeinert, darunter React, Next.js, Node.js und mobile Entwicklungsplattformen. Ich glaube an kontinuierliches Lernen und erkunde ständig neue Werkzeuge und Frameworks, um an der Spitze der Innovation zu bleiben."
  },
  personalInfoTitle: { en: "Personal Informations", de: "Persönliche Informationen"},
  name: { en: "Name:", de: "Name:"},
  ryanAdams: { en: "Ryan Adams", de: "Ryan Adams"},
  age: { en: "Age:", de: "Alter:"},
  years32: { en: "32 Years", de: "32 Jahre"},
  residence: { en: "Residence:", de: "Wohnort:"},
  germany: { en: "Germany", de: "Deutschland"},
  email: { en: "Email:", de: "Email:"},
  myEmail: { en: "ryan.adams@example.com", de: "ryan.adams@example.com"},
  phone: { en: "Phone:", de: "Telefon:"},
  myPhone: { en: "+0123 456 789", de: "+0123 456 789"},
};

export function AboutSection({ lang }: AboutSectionProps) {
  return (
    <SectionCard id="about" title={content.title[lang]}>
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
            <Image src="https://placehold.co/400x500.png" alt={content.name[lang]} width={400} height={500} className="rounded-lg shadow-xl object-cover w-full h-auto" data-ai-hint="developer portrait"/>
        </div>
        <div className="md:col-span-2 space-y-4">
            <p>{content.paragraph1[lang]}</p>
            <p>{content.paragraph2[lang]}</p>
            <h3 className="text-xl font-headline text-primary pt-4">{content.personalInfoTitle[lang]}</h3>
            <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>{content.name[lang]}</span> <span className="font-medium">{content.ryanAdams[lang]}</span></li>
                <li className="flex justify-between"><span>{content.age[lang]}</span> <span className="font-medium">{content.years32[lang]}</span></li>
                <li className="flex justify-between"><span>{content.residence[lang]}</span> <span className="font-medium">{content.germany[lang]}</span></li>
                <li className="flex justify-between"><span>{content.email[lang]}</span> <span className="font-medium text-accent hover:underline"><a href={`mailto:${content.myEmail[lang]}`}>{content.myEmail[lang]}</a></span></li>
                <li className="flex justify-between"><span>{content.phone[lang]}</span> <span className="font-medium">{content.myPhone[lang]}</span></li>
            </ul>
        </div>
      </div>
    </SectionCard>
  );
}
