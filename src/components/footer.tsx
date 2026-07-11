import Link from "next/link";
import { X, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

const year = new Date().getFullYear();

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Articles", href: "/articles" },
  { label: "AI Lab", href: "/ai-lab" },
  { label: "Open Source", href: "/open-source" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/tirthachetry-zoho", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/tirthachetry", Icon: LinkedinIcon },
  { label: "X", href: "https://x.com/tirthachetry", Icon: X },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="wrap py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="mono text-lg font-bold text-foreground hover:text-primary transition-colors"
            >
              tc<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Building scalable distributed systems and agentic AI. Designed and
              built with Next.js — because I still can.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ul className="flex items-center gap-1">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex rounded-md p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} Tirtha Chetry. All rights reserved.</p>
          <a
            href="#main"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}