'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { analytics } from '@/lib/analytics';
import type { Language } from '@/types';

// No external dependencies needed for time-based + math validation

interface ContactFormStaticProps {
  lang: Language;
}

const content = {
  title: {
    en: "Get In Touch",
    de: "Kontakt Aufnehmen"
  },
  subtitle: {
    en: "Ready to work together? Let's discuss your project.",
    de: "Bereit zusammenzuarbeiten? Lassen Sie uns über Ihr Projekt sprechen."
  },
  name: {
    en: "Name",
    de: "Name"
  },
  email: {
    en: "Email",
    de: "E-Mail"
  },
  message: {
    en: "Message",
    de: "Nachricht"
  },
  send: {
    en: "Send Message",
    de: "Nachricht Senden"
  },
  sending: {
    en: "Sending...",
    de: "Wird gesendet..."
  },
  success: {
    en: "Message sent successfully! I'll get back to you soon.",
    de: "Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen."
  },
  error: {
    en: "Failed to send message. Please try again.",
    de: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut."
  },
  captcha: {
    en: "Please complete the reCAPTCHA verification.",
    de: "Bitte vervollständigen Sie die reCAPTCHA-Verifizierung."
  },
  captchaError: {
    en: "reCAPTCHA verification failed. Please try again.",
    de: "reCAPTCHA-Verifizierung fehlgeschlagen. Bitte versuchen Sie es erneut."
  }
};

export function ContactFormStatic({ lang }: ContactFormStaticProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    mathAnswer: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState(Date.now());
  const [mathQuestion, setMathQuestion] = useState({ question: '', answer: 0 });
  const { toast } = useToast();

  // Generate math question on component mount
  useEffect(() => {
    generateMathQuestion();
  }, []);

  const generateMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = Math.random() > 0.5 ? '+' : '-';
    let answer: number;
    let question: string;

    if (operation === '+') {
      answer = num1 + num2;
      question = `${num1} + ${num2} = ?`;
    } else {
      // Ensure positive result for subtraction
      const larger = Math.max(num1, num2);
      const smaller = Math.min(num1, num2);
      answer = larger - smaller;
      question = `${larger} - ${smaller} = ?`;
    }

    setMathQuestion({ question, answer });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if math answer is correct
      if (parseInt(formData.mathAnswer) !== mathQuestion.answer) {
        toast({
          title: content.captcha[lang],
          description: "",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Track form submission start
      analytics.trackContactInteraction('start', 'contact-form');

      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formStartTime: formStartTime,
          submissionTime: Date.now(),
          mathAnswer: parseInt(formData.mathAnswer),
          expectedAnswer: mathQuestion.answer
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: content.success[lang],
          description: "",
        });
        
        // Track successful submission
        analytics.trackContactInteraction('complete', 'contact-form');
        
        // Reset form and generate new math question
        setFormData({ 
          name: '', 
          email: '', 
          message: '',
          mathAnswer: ''
        });
        generateMathQuestion();
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: content.error[lang],
        description: "",
        variant: "destructive",
      });
      
      // Track failed submission
      analytics.trackContactInteraction('error', 'contact-form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline text-foreground">
          {content.title[lang]}
        </CardTitle>
        <p className="text-muted-foreground">
          {content.subtitle[lang]}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              {content.name[lang]}
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
              placeholder={content.name[lang]}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              {content.email[lang]}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
              placeholder={content.email[lang]}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              {content.message[lang]}
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full resize-none"
              placeholder={content.message[lang]}
            />
          </div>

          {/* Math Question */}
          <div className="space-y-2">
            <Label htmlFor="mathAnswer" className="text-foreground">
              {lang === 'en' ? 'Security Question' : 'Sicherheitsfrage'}: {mathQuestion.question}
            </Label>
            <Input
              id="mathAnswer"
              name="mathAnswer"
              type="number"
              value={formData.mathAnswer}
              onChange={handleChange}
              required
              className="w-full"
              placeholder={lang === 'en' ? 'Enter your answer' : 'Geben Sie Ihre Antwort ein'}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {content.sending[lang]}
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                {content.send[lang]}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
