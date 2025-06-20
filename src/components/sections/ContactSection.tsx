"use client";

import { SectionCard } from "@/components/SectionCard";
import { ContactForm } from "@/components/ContactForm";
import type { Language, Content } from "@/types";
import { Mail } from "lucide-react";

interface ContactSectionProps {
  lang: Language;
}

const content = {
  title: { en: "Contact Me", de: "Kontaktieren Sie Mich" },
  description: {
    en: "Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    de: "Zögern Sie nicht, mich zu kontaktieren! Ich bin immer offen für die Diskussion neuer Projekte, kreativer Ideen oder Möglichkeiten, Teil Ihrer Visionen zu sein."
  },
  emailLabel: { en: "Email", de: "Email" },
  emailValue: { en: "ryan.adams@example.com", de: "ryan.adams@example.com" },
};

export function ContactSection({ lang }: ContactSectionProps) {
  return (
    <SectionCard id="contact" title={content.title[lang]}>
      <p className="mb-8 text-center">{content.description[lang]}</p>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="text-xl font-headline text-foreground mb-4">{content.title[lang]}</h3>
          <div className="flex items-start">
            <Mail className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground">{content.emailLabel[lang]}</h4>
              <a href={`mailto:${content.emailValue[lang]}`} className="text-muted-foreground hover:text-accent transition-colors">{content.emailValue[lang]}</a>
            </div>
          </div>
        </div>
        <div>
          <ContactForm lang={lang} />
        </div>
      </div>
    </SectionCard>
  );
}
