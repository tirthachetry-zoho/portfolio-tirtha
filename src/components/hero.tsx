"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, GitBranch, Link as LinkIcon, Mail, Sparkles, Code, Cpu, Database, Cloud } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

const techIcons = [
  { icon: Code, color: "text-blue-500" },
  { icon: Cpu, color: "text-purple-500" },
  { icon: Database, color: "text-green-500" },
  { icon: Cloud, color: "text-cyan-500" },
];

export function Hero() {
  const yearsOfExperience = useMemo(() => {
    const startDate = new Date("2019-06-01"); // Start date for career
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();
    return months < 0 ? years - 1 : years;
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Engineer & Software Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary"
          >
            Engineering Blogs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto"
          >
            Senior Software Engineer with {yearsOfExperience} years of experience building scalable distributed systems across FinTech, Order Management Systems (OMS), and Warehouse Management Systems (WMS).
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto"
          >
            I work primarily with Java, Spring Boot, Quarkus, AWS, and cloud-native architectures. Recently, I've been exploring Generative AI, RAG pipelines, and Spring AI to build intelligent applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Through this profile, I share engineering insights, architecture patterns, practical lessons, and hands-on experiences from real-world systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => scrollToSection("articles")}
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
            >
              <span className="flex items-center">
                View Articles
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 border border-primary/50 text-primary rounded-full font-medium hover:bg-primary/10 transition-all duration-300"
            >
              Explore Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/90 transition-all duration-300"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Floating tech icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-8 mb-16"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, delay: index * 0.2, repeat: Infinity }}
                className={tech.color}
              >
                <tech.icon className="w-8 h-8" />
              </motion.div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/tirthachetry-zoho"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <GitBranch className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/tirthachetry"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <LinkIcon className="w-6 h-6" />
            </a>
            <a
              href="mailto:tirtha@example.com"
              className="p-3 rounded-full bg-card border hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
