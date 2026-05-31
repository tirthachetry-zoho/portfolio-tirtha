"use client";

import Link from "next/link";
import { GitBranch, Link as LinkIcon, Mail, X as Twitter, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-xl mb-4">
              <span className="text-primary">Tirtha</span>
              <span className="text-secondary">Chetry</span>
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building intelligent systems, AI-powered applications, and scalable software for the future.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/tirthachetry-zoho"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/tirthachetry"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkIcon className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/tirthachetry"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:tirtha@example.com"
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#articles" className="text-muted-foreground hover:text-primary transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#ai-lab" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Lab
                </Link>
              </li>
              <li>
                <Link href="#open-source" className="text-muted-foreground hover:text-primary transition-colors">
                  Open Source
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tech-stack" className="text-muted-foreground hover:text-primary transition-colors">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-muted-foreground hover:text-primary transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-muted-foreground hover:text-primary transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/speaking" className="text-muted-foreground hover:text-primary transition-colors">
                  Speaking
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Tirtha Chetry. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Built with <Heart className="w-4 h-4 mx-1 text-primary" /> using Next.js 15
          </p>
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
