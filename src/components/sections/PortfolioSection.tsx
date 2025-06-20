"use client";

import Image from "next/image";
import { SectionCard } from "@/components/SectionCard";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { Language, Content } from "@/types";

interface PortfolioSectionProps {
  lang: Language;
}

const content = {
  title: { en: "Portfolio", de: "Portfolio" },
  projects: [
    {
      imageSrc: "https://placehold.co/600x400.png",
      imageHint: "app interface",
      title: { en: "E-commerce Platform", de: "E-Commerce Plattform" },
      description: { 
        en: "A full-featured e-commerce platform with Next.js, Stripe integration, and admin dashboard.",
        de: "Eine voll funktionsfähige E-Commerce-Plattform mit Next.js, Stripe-Integration und Admin-Dashboard."
      },
      link: "#",
      tags: ["Next.js", "Stripe", "Tailwind CSS"]
    },
    {
      imageSrc: "https://placehold.co/600x400.png",
      imageHint: "mobile app",
      title: { en: "Task Management App", de: "Aufgabenverwaltungs-App" },
      description: {
        en: "A cross-platform mobile app for task management, built with React Native and Firebase.",
        de: "Eine plattformübergreifende mobile App zur Aufgabenverwaltung, erstellt mit React Native und Firebase."
      },
      link: "#",
      tags: ["React Native", "Firebase", "Mobile"]
    },
    {
      imageSrc: "https://placehold.co/600x400.png",
      imageHint: "dashboard analytics",
      title: { en: "Data Analytics Dashboard", de: "Datenanalyse-Dashboard" },
      description: {
        en: "A real-time data analytics dashboard using D3.js and a Python backend.",
        de: "Ein Echtzeit-Datenanalyse-Dashboard mit D3.js und einem Python-Backend."
      },
      link: "#",
      tags: ["D3.js", "Python", "Analytics"]
    },
     {
      imageSrc: "https://placehold.co/600x400.png",
      imageHint: "social media",
      title: { en: "Social Networking Site", de: "Soziales Netzwerk" },
      description: {
        en: "A feature-rich social networking platform with user profiles, posts, and real-time chat.",
        de: "Eine funktionsreiche Social-Networking-Plattform mit Benutzerprofilen, Beiträgen und Echtzeit-Chat."
      },
      link: "#",
      tags: ["React", "Node.js", "WebSocket"]
    }
  ],
  viewProject: { en: "View Project", de: "Projekt Ansehen" }
};

export function PortfolioSection({ lang }: PortfolioSectionProps) {
  return (
    <SectionCard id="portfolio" title={content.title[lang]}>
      <div className="grid md:grid-cols-2 gap-6">
        {content.projects.map((project, index) => (
          <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="p-0">
              <Image
                src={project.imageSrc}
                alt={project.title[lang]}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={project.imageHint}
              />
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <CardTitle className="text-xl font-headline mb-2 text-foreground">{project.title[lang]}</CardTitle>
              <p className="text-sm text-muted-foreground mb-3">{project.description[lang]}</p>
              <div className="space-x-2">
                {project.tags.map(tag => (
                  <span key={tag} className="inline-block bg-muted text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <Button variant="outline" asChild className="w-full text-accent border-accent hover:bg-accent hover:text-accent-foreground">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {content.viewProject[lang]} <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionCard>
  );
}
