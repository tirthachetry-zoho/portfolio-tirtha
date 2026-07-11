"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GithubIcon, LinkedinIcon, TopmateIcon } from "@/components/ui/brand-icons";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL = "tirthachetri12@gmail.com";
const socials = [
  { label: "GitHub", href: "https://github.com/tirthachetry-zoho", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/tirthachetry", Icon: LinkedinIcon },
  { label: "X", href: "https://x.com/tirthachetry", Icon: X },
  { label: "Topmate", href: "https://topmate.io/tirtha_chetry", Icon: TopmateIcon },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const reduce = useReducedMotion();

  function validate() {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!message.trim()) next.message = "Please enter a message.";
    else if (message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // No backend wired: compose a mailto as a reliable fallback.
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <SectionHeading
        eyebrow="// contact"
        title="Get in touch"
        description="Open to backend / infra roles, and always happy to talk through a hard pagination bug."
      />

      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            The fastest way to reach me is email. I usually reply within a day.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="text-primary underline-offset-4 hover:underline"
              >
                {EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 rounded-xl border border-border bg-surface/60 p-6"
          aria-describedby={status === "error" ? "form-status" : undefined}
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
              placeholder="Ada Lovelace"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 flex items-center gap-1 text-xs text-destructive">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 flex items-center gap-1 text-xs text-destructive">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
              placeholder="Tell me about the role or problem..."
            />
            {errors.message && (
              <p id="message-error" className="mt-1 flex items-center gap-1 text-xs text-destructive">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p
              id="form-status"
              role="status"
              className="flex items-center gap-2 text-sm text-primary"
            >
              <CheckCircle2 className="h-4 w-4" />
              Thanks! Your email client should have opened with the message.
            </p>
          )}
          {status === "error" && (
            <p
              id="form-status"
              role="alert"
              className="flex items-center gap-2 text-sm text-destructive"
            >
              <AlertCircle className="h-4 w-4" />
              Please fix the highlighted fields above.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}