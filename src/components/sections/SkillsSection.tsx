"use client";

import { SectionCard } from "@/components/SectionCard";
import { Progress } from "@/components/ui/progress";
import type { Language, Content } from "@/types";

interface SkillsSectionProps {
  lang: Language;
}

const content = {
  title: { en: "My Skills", de: "Meine Fähigkeiten" },
  skills: [
    { name: "React & Next.js", level: 95, levelText: { en: "Expert", de: "Experte" } },
    { name: "JavaScript & TypeScript", level: 90, levelText: { en: "Expert", de: "Experte" } },
    { name: "Node.js & Express", level: 85, levelText: { en: "Advanced", de: "Fortgeschritten" } },
    { name: "Swift & Kotlin (Mobile)", level: 80, levelText: { en: "Advanced", de: "Fortgeschritten" } },
    { name: "UI/UX Design Principles", level: 75, levelText: { en: "Proficient", de: "Kompetent" } },
    { name: "Tailwind CSS & ShadCN", level: 90, levelText: { en: "Expert", de: "Experte" } },
    { name: "Database (SQL/NoSQL)", level: 80, levelText: { en: "Advanced", de: "Fortgeschritten" } },
    { name: "Cloud (AWS/Firebase)", level: 70, levelText: { en: "Proficient", de: "Kompetent" } },
  ]
};

export function SkillsSection({ lang }: SkillsSectionProps) {
  return (
    <SectionCard id="skills" title={content.title[lang]}>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        {content.skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-xs text-accent">{skill.levelText[lang]} - {skill.level}%</span>
            </div>
            <Progress value={skill.level} aria-label={`${skill.name} proficiency: ${skill.level}%`} className="h-3 [&>div]:bg-accent" />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
