import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Language } from "@/types";
import { analytics } from "@/lib/analytics";

const buttonText = {
  en: "Download CV",
  de: "Lebenslauf Herunterladen",
};

interface CvDownloadButtonProps {
  lang: Language;
  className?: string;
}

export function CvDownloadButton({ lang, className }: CvDownloadButtonProps) {
  const handleDownload = () => {
    analytics.trackCvDownload('pdf');
  };

  return (
    <Button asChild variant="outline" className={className}>
      <a 
        href="/arsalan-cv.pdf" 
        download="Arsalan_Parham_CV.pdf" 
        aria-label={buttonText[lang]}
        onClick={handleDownload}
      >
        <Download className="mr-2 h-4 w-4" />
        {buttonText[lang]}
      </a>
    </Button>
  );
}
