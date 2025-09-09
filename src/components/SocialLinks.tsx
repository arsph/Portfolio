import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`flex space-x-2 ${className}`}>
      <Button variant="outline" size="icon" asChild aria-label="GitHub Profile">
        <a href="https://github.com/arsph" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild aria-label="LinkedIn Profile">
        <a href="https://www.linkedin.com/in/arsalanph" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
}
