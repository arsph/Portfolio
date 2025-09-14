"use client";

import { SectionCard } from "@/components/SectionCard";
import type { Language, Content, ResumeExperience, ResumeEducation } from "@/types";
import { Briefcase, GraduationCap } from "lucide-react";

interface ResumeSectionProps {
  lang: Language;
}

const content: {
  title: Content;
  experienceTitle: Content;
  educationTitle: Content;
  experiences: ResumeExperience[];
  education: ResumeEducation[];
} = {
  title: { en: "CV", de: "Lebenslauf" },
  experienceTitle: { en: "Experience", de: "Berufserfahrungen" },
  educationTitle: { en: "Education", de: "Studium" },
  experiences: [
    {
      date: { en: "2024 - 2025", de: "2024 - 2025" },
      role: { en: "Frontend Developer", de: "Frontend Entwickler" },
      company: { en: "WAGEMUT GmbH", de: "WAGEMUT GmbH" },
      description: { 
        en: [
          "Development of modern and responsive web applications with React, Bootstrap, TypeScript",
          "Integration of RESTful APIs and State Management with React Redux",
          "Versioning and code management with Git",
          "Ensured cross-browser compatibility and mobile-first principle"
        ],
        de: [
          "Entwicklung moderner und responsiver Webanwendungen mit React, Bootstrap, TypeScript",
          "Integration von RESTful APIs und State Management mit React Redux",
          "Versionierung und Codeverwaltung mit Git",
          "Cross-Browser-Kompatibilität und Mobile-First-Prinzip sichergestellt"
        ]
      }
    },
    {
      date: { en: "2019 - 2022", de: "2019 - 2022" },
      role: { en: "Frontend Developer", de: "Frontend Entwickler" },
      company: { en: "Bricoflor GmbH", de: "Bricoflor GmbH" },
      description: {
        en: [
          "Design and development of websites based on designed layouts with HTML, CSS, Bootstrap, Vue, PHP and WordPress",
          "Development of websites on Magento",
          "Successfully implement responsive designs and cross-browser compatibility"
        ],
        de: [
          "Design und Entwicklung Webseiten basierend auf entworfenen Layouts mit HTML, CSS, Bootstrap, Vue, PHP und WordPress",
          "Entwicklung der Webseiten auf Magento",
          "Responsive Designs erfolgreich implementieren und die Cross-Browser-Kompatibilität"
        ]
       }
    },
  ],
  education: [
    {
      date: { en: "2020 - 2024", de: "2020 - 2024" },
      degree: { en: "M.Sc. Computer Science - Data Science", de: "M.Sc. Informatik - Data Science" },
      institution: { en: "Bergische Universität Wuppertal", de: "Bergische Universität Wuppertal" },
              description: {
          en: [
            "Focused on machine learning, statistics, data science and python programming"
          ],
          de: [
            "Schwerpunkt auf maschinelles Lernen, Statistik, Data Science und Python-Programmierung"
          ]
        }
    },
    {
      date: { en: "2012 - 2017", de: "2012 - 2017" },
      degree: { en: "B.Sc. Computer Engineering - Software", de: "B.Sc. Informatik" },
      institution: { en: "Shahid Beheshti University", de: "Shahid Beheshti Universität" },
    }
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
                {Array.isArray(exp.description[lang]) ? (
                  <div className="space-y-1">
                    {exp.description[lang].map((line, lineIndex) => (
                      <p key={lineIndex} className="text-sm">{line}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm">{exp.description[lang]}</p>
                )}
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
                {edu.description && (
                  Array.isArray(edu.description[lang]) ? (
                    <div className="space-y-1">
                      {edu.description[lang].map((line, lineIndex) => (
                        <p key={lineIndex} className="text-sm">{line}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm">{edu.description[lang]}</p>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
