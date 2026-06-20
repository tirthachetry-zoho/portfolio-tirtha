"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, GitBranch, Link as LinkIcon, Mail, Sparkles, Code, Cpu, Database, Cloud, Terminal, Braces } from "lucide-react";
import Link from "next/link";
import { useMemo, useEffect, useState } from "react";

const techIcons = [
  { icon: Code, color: "text-blue-400" },
  { icon: Cpu, color: "text-purple-400" },
  { icon: Database, color: "text-green-400" },
  { icon: Cloud, color: "text-cyan-400" },
  { icon: Terminal, color: "text-pink-400" },
  { icon: Braces, color: "text-orange-400" },
];

export function Hero() {
  const yearsOfExperience = useMemo(() => {
    const startDate = new Date("2019-06-01");
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();
    return months < 0 ? years - 1 : years;
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        
        {/* Dynamic gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-[150px]"
        />
      </div>

      {/* Mouse-following spotlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.05), transparent 40%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">AI Engineer & Software Developer</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 gradient-text animate-gradient"
          >
            Engineering Blogs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed"
          >
            Senior Software Engineer with <span className="text-primary font-semibold">{yearsOfExperience}+ years</span> of experience building scalable distributed systems across FinTech, OMS, and WMS.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Specializing in Java, Spring Boot, Quarkus, AWS, and cloud-native architectures. Exploring Generative AI, RAG pipelines, and Spring AI for intelligent applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            Sharing engineering insights, architecture patterns, practical lessons, and hands-on experiences from real-world systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <motion.button
              onClick={() => scrollToSection("articles")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden transition-all duration-300 glow"
            >
              <span className="relative z-10 flex items-center">
                View Articles
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass border border-primary/30 text-primary rounded-full font-medium hover:border-primary/50 transition-all duration-300"
            >
              Explore Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white rounded-full font-medium hover:opacity-90 transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Enhanced floating tech icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-8 mb-20"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ y: 0, opacity: 0 }}
                animate={{ 
                  y: [-15, 15, -15],
                  opacity: 1,
                }}
                transition={{ 
                  duration: 4, 
                  delay: index * 0.15, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`p-3 rounded-xl glass border border-primary/20 ${tech.color} hover:scale-110 transition-transform cursor-pointer`}
              >
                <tech.icon className="w-8 h-8" />
              </motion.div>
            ))}
          </motion.div>

          {/* Premium social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              href="https://github.com/tirthachetry-zoho"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-2xl glass border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <GitBranch className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/tirthachetry"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-2xl glass border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <LinkIcon className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:tirthachetri12@gmail.com"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-2xl glass border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
