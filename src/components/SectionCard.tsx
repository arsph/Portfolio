import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionCardProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export function SectionCard({ id, title, children, className, titleClassName, contentClassName }: SectionCardProps) {
  return (
    <Card id={id} className={cn("w-full shadow-lg animate-fade-in", className)} style={{ animationDelay: '0.2s' }}>
      <CardHeader>
        <CardTitle className={cn("text-3xl font-headline text-primary", titleClassName)}>{title}</CardTitle>
      </CardHeader>
      <CardContent className={cn("text-muted-foreground space-y-4", contentClassName)}>
        {children}
      </CardContent>
    </Card>
  );
}
