
"use client";

import { useActionState, useEffect, useTransition, useState } from "react"; // Changed from react-dom's useFormState
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, CheckCircle, AlertCircle } from "lucide-react";

import { useToast } from "@/hooks/use-toast";
import type { Language } from "@/types";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  mathAnswer: z.string().min(1, { message: "Please solve the math question." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialFormState: ContactFormState = {
  message: "",
  status: "idle",
};

const content = {
  formTitle: { en: "Get in Touch", de: "Kontakt aufnehmen" },
  nameLabel: { en: "Your Name", de: "Ihr Name" },
  namePlaceholder: { en: "Enter your name", de: "Geben Sie Ihren Namen ein" },
  emailLabel: { en: "Your Email", de: "Ihre E-Mail" },
  emailPlaceholder: { en: "Enter your email address", de: "Geben Sie Ihre E-Mail-Adresse ein" },
  messageLabel: { en: "Your Message", de: "Ihre Nachricht" },
  messagePlaceholder: { en: "Type your message here...", de: "Geben Sie hier Ihre Nachricht ein..." },
  mathLabel: { en: "Security Question", de: "Sicherheitsfrage" },
  mathPlaceholder: { en: "Enter your answer", de: "Geben Sie Ihre Antwort ein" },
  mathError: { en: "Please solve the math question correctly.", de: "Bitte lösen Sie die Mathematikfrage korrekt." },
  timeError: { en: "Please take a moment to fill out the form properly.", de: "Bitte nehmen Sie sich einen Moment Zeit, um das Formular ordnungsgemäß auszufüllen." },
  submitButton: { en: "Send Message", de: "Nachricht Senden" },
  submittingButton: { en: "Sending...", de: "Wird gesendet..." },
  successTitle: { en: "Message Sent!", de: "Nachricht gesendet!"},
  errorTitle: { en: "Error!", de: "Fehler!"}
};


function SubmitButton({ lang, isSubmitting }: { lang: Language, isSubmitting: boolean }) {
  return (
    <Button type="submit" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
      {isSubmitting ? content.submittingButton[lang] : content.submitButton[lang]}
    </Button>
  );
}

interface ContactFormProps {
  lang: Language;
}

export function ContactForm({ lang }: ContactFormProps) {
  const [state, formAction] = useActionState(submitContactForm, initialFormState); // Changed to useActionState
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  // Time-based validation
  const [formStartTime] = useState(Date.now());
  
  // Math question state
  const [mathQuestion, setMathQuestion] = useState({ question: '', answer: 0 });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      mathAnswer: "",
    },
  });

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


  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: content.successTitle[lang],
        description: state.message,
        variant: "default",
      });
      form.reset();
      generateMathQuestion(); // Generate new math question after successful submission
    } else if (state.status === "error" && state.message) {
       toast({
        title: content.errorTitle[lang],
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form, lang]);

  // Use isPending from useTransition for server action state
  const isSubmitting = isPending;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Time-based validation
    const timeSpent = Date.now() - formStartTime;
    if (timeSpent < 3000) { // Less than 3 seconds
      toast({
        title: content.timeError[lang],
        description: "",
        variant: "destructive",
      });
      return;
    }

    // Math question validation
    const userAnswer = parseInt(form.getValues("mathAnswer"));
    if (userAnswer !== mathQuestion.answer) {
      toast({
        title: content.mathError[lang],
        description: "",
        variant: "destructive",
      });
      return;
    }
    
    // Create FormData and submit
    const formData = new FormData();
    formData.append("name", form.getValues("name"));
    formData.append("email", form.getValues("email"));
    formData.append("message", form.getValues("message"));
    formData.append("mathAnswer", form.getValues("mathAnswer"));
    formData.append("formStartTime", formStartTime.toString());
    formData.append("submissionTime", Date.now().toString());
    
    // Use startTransition to properly handle the server action
    startTransition(() => {
      formAction(formData);
    });
  };



  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-foreground">{content.nameLabel[lang]}</Label>
        <Input
          id="name"
          type="text"
          placeholder={content.namePlaceholder[lang]}
          {...form.register("name")}
          className="mt-1 bg-card border-border focus:ring-accent"
          aria-invalid={!!form.formState.errors.name || !!state.errors?.name}
          aria-describedby="name-error"
        />
        {(form.formState.errors.name || state.errors?.name) && (
          <p id="name-error" className="text-sm text-destructive mt-1">
            {form.formState.errors.name?.message || state.errors?.name?.[0]}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-foreground">{content.emailLabel[lang]}</Label>
        <Input
          id="email"
          type="email"
          placeholder={content.emailPlaceholder[lang]}
          {...form.register("email")}
          className="mt-1 bg-card border-border focus:ring-accent"
          aria-invalid={!!form.formState.errors.email || !!state.errors?.email}
          aria-describedby="email-error"
        />
        {(form.formState.errors.email || state.errors?.email) && (
          <p id="email-error" className="text-sm text-destructive mt-1">
            {form.formState.errors.email?.message || state.errors?.email?.[0]}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-foreground">{content.messageLabel[lang]}</Label>
        <Textarea
          id="message"
          placeholder={content.messagePlaceholder[lang]}
          {...form.register("message")}
          className="mt-1 min-h-[120px] bg-card border-border focus:ring-accent"
          aria-invalid={!!form.formState.errors.message || !!state.errors?.message}
          aria-describedby="message-error"
        />
        {(form.formState.errors.message || state.errors?.message) && (
          <p id="message-error" className="text-sm text-destructive mt-1">
            {form.formState.errors.message?.message || state.errors?.message?.[0]}
          </p>
        )}
      </div>

      {/* Math Question */}
      <div>
        <Label htmlFor="mathAnswer" className="text-foreground">
          {content.mathLabel[lang]}: {mathQuestion.question}
        </Label>
        <Input
          id="mathAnswer"
          type="number"
          placeholder={content.mathPlaceholder[lang]}
          {...form.register("mathAnswer")}
          className="mt-1 bg-card border-border focus:ring-accent"
          aria-invalid={!!form.formState.errors.mathAnswer || !!state.errors?.mathAnswer}
          aria-describedby="math-error"
        />
        {(form.formState.errors.mathAnswer || state.errors?.mathAnswer) && (
          <p id="math-error" className="text-sm text-destructive mt-1">
            {form.formState.errors.mathAnswer?.message || state.errors?.mathAnswer?.[0]}
          </p>
        )}
      </div>

      <SubmitButton lang={lang} isSubmitting={isSubmitting}/>
    </form>
  );
}
