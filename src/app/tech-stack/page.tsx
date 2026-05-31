"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Cpu, Server, GitBranch, Layout, Terminal, Shield, Zap } from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: Layout,
    technologies: [
      { name: "Next.js", level: 95, years: 4 },
      { name: "React", level: 95, years: 5 },
      { name: "TypeScript", level: 90, years: 4 },
      { name: "Tailwind CSS", level: 90, years: 3 },
      { name: "Framer Motion", level: 85, years: 2 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    technologies: [
      { name: "Node.js", level: 90, years: 5 },
      { name: "Python", level: 85, years: 4 },
      { name: "FastAPI", level: 80, years: 3 },
      { name: "Express", level: 85, years: 4 },
      { name: "GraphQL", level: 75, years: 2 },
    ],
  },
  {
    title: "AI & ML",
    icon: Cpu,
    technologies: [
      { name: "OpenAI", level: 90, years: 2 },
      { name: "LangChain", level: 85, years: 2 },
      { name: "CrewAI", level: 80, years: 1 },
      { name: "TensorFlow", level: 70, years: 2 },
      { name: "PyTorch", level: 65, years: 1 },
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    technologies: [
      { name: "AWS", level: 85, years: 3 },
      { name: "Azure", level: 75, years: 2 },
      { name: "Vercel", level: 90, years: 3 },
      { name: "Docker", level: 85, years: 3 },
      { name: "Kubernetes", level: 70, years: 2 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", level: 85, years: 4 },
      { name: "MongoDB", level: 80, years: 3 },
      { name: "Redis", level: 75, years: 3 },
      { name: "MySQL", level: 80, years: 4 },
      { name: "Prisma", level: 85, years: 2 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    technologies: [
      { name: "Git", level: 95, years: 5 },
      { name: "GitHub Actions", level: 85, years: 3 },
      { name: "Terraform", level: 75, years: 2 },
      { name: "CI/CD", level: 85, years: 4 },
      { name: "Linux", level: 80, years: 4 },
    ],
  },
];

export default function TechStackPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Tech Stack</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to build scalable, intelligent applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{tech.years} years experience</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-card border rounded-xl p-6 text-center">
            <Code2 className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">15+</h3>
            <p className="text-sm text-muted-foreground">Programming Languages</p>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">50+</h3>
            <p className="text-sm text-muted-foreground">Tools & Frameworks</p>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">5+</h3>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
