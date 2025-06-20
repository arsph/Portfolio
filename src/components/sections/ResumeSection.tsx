"use client";

import { SectionCard } from "@/components/SectionCard";
import type { Language, Content } from "@/types";
import { Briefcase, GraduationCap } from "lucide-react";

interface ResumeSectionProps {
  lang: Language;
}

const content = {
  title: { en: "Resume", de: "Lebenslauf" },
  experienceTitle: { en: "Experience", de: "Erfahrung" },
  educationTitle: { en: "Education", de: "Ausbildung" },
  experiences: [
    {
      date: { en: "2021 - Present", de: "2021 - Heute" },
      role: { en: "Senior App Developer", de: "Senior App Entwickler" },
      company: { en: "Tech Solutions Inc.", de: "Tech Solutions GmbH" },
      description: { 
        en: "Led development of flagship mobile applications, mentored junior developers, and contributed to architectural decisions.",
        de: "Leitung der Entwicklung von Flaggschiff-Mobilanwendungen, Betreuung von Nachwuchsentwicklern und Mitwirkung an Architekturentscheidungen."
      }
    },
    {
      date: { en: "2018 - 2021", de: "2018 - 2021" },
      role: { en: "Full-Stack Developer", de: "Full-Stack Entwickler" },
      company: { en: "Web Innovators Co.", de: "Web Innovators AG" },
      description: {
        en: "Developed and maintained web applications using React, Node.js, and various cloud services. Collaborated with cross-functional teams.",
        de: "Entwicklung und Wartung von Webanwendungen mit React, Node.js und verschiedenen Cloud-Diensten. Zusammenarbeit mit funktionsübergreifenden Teams."
       }
    },
  ],
  education: [
    {
      date: { en: "2014 - 2018", de: "2014 - 2018" },
      degree: { en: "B.Sc. in Computer Science", de: "B.Sc. in Informatik" },
      institution: { en: "University of Technology", de: "Technische Universität" },
      description: {
        en: "Focused on software engineering, algorithms, and mobile application development. Graduated with honors.",
        de: "Schwerpunkt auf Software Engineering, Algorithmen und Entwicklung mobiler Anwendungen. Abschluss mit Auszeichnung."
      }
    },
  ]
};

export function ResumeSection({ lang }: ResumeSectionProps) {
  return (
    <SectionCard id="resume" title={content.title[lang]}>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-headline text-foreground mb-6 flex items-center">
            <Briefcase className="mr-3 h-6 w-6 text-accent" />
            {content.experienceTitle[lang]}
          </h3>
          <div className="space-y-6 relative pl-6 before:absolute before:inset-y-0 before:left-2 before:w-0.5 before:bg-border">
            {content.experiences.map((exp, index) => (
              <div key={index} className="relative pl-4 before:absolute before:-left-2.5 before:top-1.5 before:h-3 before:w-3 before:rounded-full before:bg-accent before:ring-4 before:ring-background">
                <p className="text-xs text-muted-foreground bg-muted inline-block px-2 py-0.5 rounded-full mb-1">{exp.date[lang]}</p>
                <h4 className="text-lg font-semibold text-foreground">{exp.role[lang]}</h4>
                <p className="text-sm text-accent mb-1">{exp.company[lang]}</p>
                <p className="text-sm">{exp.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-headline text-foreground mb-6 flex items-center">
            <GraduationCap className="mr-3 h-6 w-6 text-accent" />
            {content.educationTitle[lang]}
          </h3>
          <div className="space-y-6 relative pl-6 before:absolute before:inset-y-0 before:left-2 before:w-0.5 before:bg-border">
            {content.education.map((edu, index) => (
              <div key={index} className="relative pl-4 before:absolute before:-left-2.5 before:top-1.5 before:h-3 before:w-3 before:rounded-full before:bg-accent before:ring-4 before:ring-background">
                <p className="text-xs text-muted-foreground bg-muted inline-block px-2 py-0.5 rounded-full mb-1">{edu.date[lang]}</p>
                <h4 className="text-lg font-semibold text-foreground">{edu.degree[lang]}</h4>
                <p className="text-sm text-accent mb-1">{edu.institution[lang]}</p>
                 <p className="text-sm">{edu.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
