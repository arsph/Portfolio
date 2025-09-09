"use client";

import { SectionCard } from "@/components/SectionCard";
import { Progress } from "@/components/ui/progress";
import type { Language, Content } from "@/types";

interface SkillsSectionProps {
  lang: Language;
}

const content = {
  title: { en: "Skills", de: "Skills" },
  skills: [
    { name: "HTML & CSS", level: 90, levelText: { en: "Expert", de: "Experte" } },
    { name: "JavaScript & TypeScript", level: 80, levelText: { en: "Advanced", de: "Fortgeschritten" } },
    { name: "Bootstrap & Tailwind CSS", level: 85, levelText: { en: "Advanced", de: "Fortgeschritten" } },
    { name: "React & Vue", level: 80, levelText: { en: "Advanced", de: "Fortgeschritten" } },
    { name: "Responsive Design", level: 80, levelText: { en: "Advanced", de: "Fortgeschritten" } },
    { name: "WordPress", level: 90, levelText: { en: "Expert", de: "Experte" } },
    { name: "SQL", level: 85, levelText: { en: "Advanced", de: "Fortgeschritten" } },
    { name: "Laravel & PHP", level: 70, levelText: { en: "Proficient", de: "Kompetent" } },
    { name: "Git & GitHub", level: 85, levelText: { en: "Advanced", de: "Fortgeschritten" } },
    { name: "Python & Machine Learning", level: 75, levelText: { en: "Proficient", de: "Kompetent" } },
    { name: "Cursor AI", level: 85, levelText: { en: "Proficient", de: "Kompetent" } },
    { name: "AWS & Cloud", level: 80, levelText: { en: "Advanced", de: "Fortgeschritten" } },
    { name: "English", level: 90, levelText: { en: "Expert", de: "Experte" } },
    { name: "Deutsch", level: 80, levelText: { en: "Advanced", de: "Fortgeschritten" } }
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
