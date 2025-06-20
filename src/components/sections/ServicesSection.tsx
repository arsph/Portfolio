"use client";

import { SectionCard } from "@/components/SectionCard";
import type { Language, Content } from "@/types";
import { Smartphone, Code, Cloud, Palette } from "lucide-react"; // Example icons

interface ServicesSectionProps {
  lang: Language;
}

const content = {
  title: { en: "My Services", de: "Meine Dienstleistungen" },
  services: [
    {
      icon: Smartphone,
      name: { en: "Mobile App Development", de: "Mobile App Entwicklung" },
      description: { 
        en: "Creating high-performance, feature-packed native and cross-platform mobile applications for iOS and Android.",
        de: "Erstellung von hochleistungsfähigen, funktionsreichen nativen und plattformübergreifenden mobilen Anwendungen für iOS und Android."
      }
    },
    {
      icon: Code,
      name: { en: "Web Development", de: "Webentwicklung" },
      description: {
        en: "Building responsive and scalable web applications with modern technologies like React, Next.js, and Node.js.",
        de: "Aufbau reaktionsfähiger und skalierbarer Webanwendungen mit modernen Technologien wie React, Next.js und Node.js."
      }
    },
    {
      icon: Palette,
      name: { en: "UI/UX Design", de: "UI/UX Design" },
      description: {
        en: "Designing user-centric interfaces that are intuitive, aesthetically pleasing, and enhance user engagement.",
        de: "Gestaltung benutzerzentrierter Oberflächen, die intuitiv, ästhetisch ansprechend sind und die Benutzerbindung erhöhen."
      }
    },
    {
      icon: Cloud,
      name: { en: "API & Backend Development", de: "API & Backend Entwicklung" },
      description: {
        en: "Developing robust and secure backend systems and APIs to power your applications.",
        de: "Entwicklung robuster und sicherer Backend-Systeme und APIs zur Stromversorgung Ihrer Anwendungen."
      }
    },
  ]
};

export function ServicesSection({ lang }: ServicesSectionProps) {
  return (
    <SectionCard id="services" title={content.title[lang]}>
      <div className="grid md:grid-cols-2 gap-6">
        {content.services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="flex p-4 bg-card rounded-lg shadow-sm border border-border transition-all hover:shadow-md hover:border-primary">
              <IconComponent className="h-10 w-10 text-accent mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-1">{service.name[lang]}</h4>
                <p className="text-sm">{service.description[lang]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
