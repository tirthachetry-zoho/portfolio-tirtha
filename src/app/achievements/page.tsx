"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, BookOpen, GitBranch, Users, Target, Zap } from "lucide-react";
import Link from "next/link";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "First place at AI Innovation Hackathon 2024",
    date: "2024",
    category: "Awards",
  },
  {
    icon: Award,
    title: "AWS Certified Solutions Architect",
    description: "Professional level certification",
    date: "2023",
    category: "Certifications",
  },
  {
    icon: Star,
    title: "Open Source Contributor",
    description: "Contributed to 50+ repositories with 2000+ stars",
    date: "Ongoing",
    category: "Open Source",
  },
  {
    icon: BookOpen,
    title: "Technical Writer",
    description: "Published 30+ articles on AI and Software Engineering",
    date: "Ongoing",
    category: "Publications",
  },
  {
    icon: GitBranch,
    title: "GitHub Arctic Code Vault",
    description: "Code preserved in GitHub's Arctic Code Vault",
    date: "2020",
    category: "Milestones",
  },
  {
    icon: Users,
    title: "Community Leader",
    description: "Led local developer community with 500+ members",
    date: "2022-2023",
    category: "Community",
  },
  {
    icon: Target,
    title: "Project Milestone",
    description: "Deployed system handling 1M+ daily requests",
    date: "2023",
    category: "Technical",
  },
  {
    icon: Zap,
    title: "Innovation Award",
    description: "Recognized for AI-powered automation solutions",
    date: "2023",
    category: "Awards",
  },
];

const categories = ["All", "Awards", "Certifications", "Open Source", "Publications", "Milestones", "Community", "Technical"];

export default function AchievementsPage() {
  return (
    <div className="wrap py-16">
      <Link
        href="/"
        className="mono text-[0.8rem] text-[var(--ink-soft)] border-b border-transparent pb-1 transition-colors hover:text-[var(--rust)] hover:border-[var(--rust)] inline-block mb-8"
      >
        ← Back to home
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-[1.6rem] font-bold mb-4">Achievements</h1>
        <p className="text-[1.12rem] text-[var(--ink-soft)] max-w-[620px]">
          Recognition, certifications, and milestones throughout my career.
        </p>
      </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-card border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Awards & Recognition</div>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Open Source Projects</div>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <div className="text-sm text-muted-foreground">Publications</div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border hover:border-primary hover:text-primary transition-all duration-300 text-sm"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium mb-2">
                    {achievement.category}
                  </span>
                  <h3 className="font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">{achievement.date}</div>
            </motion.div>
          ))}
        </div>
    </div>
  );
}
