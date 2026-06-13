"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GitBranch, Link as LinkIcon, Mail, X as Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Articles", href: "/articles" },
  { name: "Projects", href: "/#projects" },
  { name: "AI Lab", href: "/#ai-lab" },
  { name: "Open Source", href: "/#open-source" },
  { name: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Engineering</span>
            <span className="text-secondary">Blogs</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a
                href="https://linkedin.com/in/tirthachetry"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <LinkIcon className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/tirthachetry"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:tirthachetri12@gmail.com"
                className="hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://github.com/tirthachetry-zoho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <GitBranch className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/tirthachetry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <LinkIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/tirthachetry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:tirtha@example.com"
                  className="hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
