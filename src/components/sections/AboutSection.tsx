"use client";

import { SectionCard } from "@/components/SectionCard";
import type { Language } from "@/types";

interface AboutSectionProps {
  lang: Language;
}

const content = {
  title: { en: "About Me", de: "Über Mich" },
  paragraph1: {
    en: "Hello! I'm Arsalan Parham, a passionate Software Developer based in Germany. I thrive on turning complex problems into elegant solutions.",
    de: "Hallo! Ich bin Arsalan Parham, ein leidenschaftlicher Softwareentwickler aus Deutschland. Ich liebe es, komplexe Probleme in elegante Lösungen zu verwandeln."
  },
  paragraph2: {
    en: "Over the years, I've honed my skills in various technologies, including Java Script, React, Next.js, WordPress, Python and data science principles. Also I'm a very fast self-learner that can learn new technologies and switch to them smoothly. I believe in continuous learning and am always exploring new tools and frameworks to stay at the forefront of innovation.",
    de: "Im Laufe der Jahre habe ich meine Fähigkeiten in verschiedenen Technologien verfeinert, darunter Java Script, React, Next.js, WordPress, Python und Data-Science-Prinzipien. Außerdem lerne ich sehr schnell und kann neue Technologien problemlos erlernen und umstellen. Ich glaube an kontinuierliches Lernen und erkunde ständig neue Tools und Frameworks, um an der Spitze der Innovation zu bleiben."
  },
  personalInfoTitle: { en: "Let's Connect", de: "Vernetzen wir uns" },
  ryanAdams: { en: "Arsalan Parham", de: "Arsalan Parham"},
  email: { en: "Email:", de: "Email:"},
  myEmail: { en: "info@arsalanparham.com", de: "info@arsalanparham.com"},
  github: { en: "GitHub:", de: "GitHub:"},
  linkedin: { en: "LinkedIn:", de: "LinkedIn:"}
};

export function AboutSection({ lang }: AboutSectionProps) {
  return (
    <SectionCard id="about" title={content.title[lang]}>
      <div className="space-y-4">
        <p>{content.paragraph1[lang]}</p>
        <p>{content.paragraph2[lang]}</p>
        <h3 className="text-xl font-headline text-primary pt-4">{content.personalInfoTitle[lang]}</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between"><span>{content.email[lang]}</span> <span className="font-medium text-accent hover:underline"><a href={`mailto:${content.myEmail[lang]}`}>{content.myEmail[lang]}</a></span></li>
          <li className="flex justify-between"><span>{content.github[lang]}</span> <a href="https://github.com/arsph" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">github.com/arsph</a></li>
          <li className="flex justify-between"><span>{content.linkedin[lang]}</span> <a href="https://www.linkedin.com/in/arsalanph" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">linkedin.com/in/arsalanph</a></li>
        </ul>
      </div>
    </SectionCard>
  );
}