"use client";

import Link from "next/link";
import { GitBranch, Link as LinkIcon, Mail, X as Twitter, Heart, ArrowUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-primary/10 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="mb-6"
            >
              <Link href="/" className="flex items-center gap-2 font-bold text-2xl mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="gradient-text">Engineering Blogs</span>
              </Link>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Engineering insights, architecture patterns, and practical lessons from building scalable distributed systems.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com/tirthachetry-zoho"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <GitBranch className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/tirthachetry"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/tirthachetry"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:tirthachetri12@gmail.com"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  About
                </Link>
              </li>
              <li>
                <Link href="#articles" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Articles
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#ai-lab" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  AI Lab
                </Link>
              </li>
              <li>
                <Link href="#open-source" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Open Source
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/tech-stack" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/speaking" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Speaking
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Tirtha Chetry. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Built with <Heart className="w-4 h-4 mx-1 text-primary" /> using Next.js
          </p>
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full glass border border-primary/20 hover:border-primary/50 transition-all duration-300"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
