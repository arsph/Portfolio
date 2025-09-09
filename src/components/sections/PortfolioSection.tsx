"use client";

import Image from "next/image";
import { SectionCard } from "@/components/SectionCard";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { Language, Content } from "@/types";
import { analytics } from "@/lib/analytics";

interface PortfolioSectionProps {
  lang: Language;
}

const content = {
  title: { en: "Portfolio", de: "Portfolio" },
  projects: [
    {
      imageSrc: "/images/weather-forecast.png",
      imageHint: "weather app interface",
      title: { en: "Weather Forecast", de: "Wettervorhersage" },
      description: { 
        en: "A modern weather application built with React, Vite, and Tailwind CSS. Get real-time weather information for any city using the OpenWeatherMap API. Responsive, fast, and easy to use.",
        de: "Eine moderne Wetteranwendung, erstellt mit React, Vite und Tailwind CSS. Erhalten Sie Echtzeit-Wetterinformationen für jede Stadt über die OpenWeatherMap API. Responsive, schnell und einfach zu bedienen."
      },
      link: "https://weather.arsiph.com/",
      tags: ["React.js", "Tailwind CSS", "Restful API"]
    },
    {
      imageSrc: "/images/portfolio-banner.png",
      imageHint: "portfolio website banner",
      title: { en: "Portfolio Website", de: "Portfolio Website" },
      description: {
        en: "My bilingual portfolio website built with Next.js, React, and Tailwind CSS.",
        de: "Meine zweisprachige Portfolio-Website, erstellt mit Next.js, React und Tailwind CSS."
      },
      link: "https://arsalanparham.com",
      tags: ["Next.js", "React.js", "Tailwind CSS", "Typescript"]
    },
    {
      imageSrc: "/images/spartan-kronos-banner.png",
      imageHint: "Spartan Kronos website banner",
      title: { en: "Spartan Kronos", de: "Spartan Kronos" },
      description: {
        en: "A multilingual website built with WordPress and Elementor based on a responsive design.",
        de: "Eine mehrsprachige Website, erstellt mit WordPress und Elementor basierend auf einem responsiven Design."
      },
      link: "https://spartan-kronos.com",
      tags: ["WordPress", "Elementor", "Responsive"]
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
              <Button 
                variant="outline" 
                asChild 
                className="w-full text-accent border-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => analytics.trackProjectClick(project.title.en, project.tags.join(', '))}
              >
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
