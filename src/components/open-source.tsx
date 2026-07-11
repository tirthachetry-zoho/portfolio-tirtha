"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GitBranch, Star, GitFork, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GithubIcon } from "@/components/ui/brand-icons";

const repositories = [
  {
    name: "ai-agent-framework",
    description: "Modular framework for building autonomous AI agents with multi-agent collaboration.",
    language: "Python",
    stars: 234,
    forks: 45,
    url: "https://github.com/tirthachetry-zoho/ai-agent-framework",
  },
  {
    name: "dev-productivity-toolkit",
    description: "Collection of tools and scripts to automate repetitive development tasks.",
    language: "TypeScript",
    stars: 567,
    forks: 89,
    url: "https://github.com/tirthachetry-zoho/dev-productivity-toolkit",
  },
  {
    name: "cloud-infra-manager",
    description: "Automated cloud infrastructure provisioning and management tool.",
    language: "Go",
    stars: 189,
    forks: 32,
    url: "https://github.com/tirthachetry-zoho/cloud-infra-manager",
  },
  {
    name: "llm-platform",
    description: "Platform for experimenting with different LLM models and prompts.",
    language: "Python",
    stars: 312,
    forks: 56,
    url: "https://github.com/tirthachetry-zoho/llm-platform",
  },
];

const languages = [
  { name: "Python", percentage: 35, color: "bg-sky-500" },
  { name: "TypeScript", percentage: 28, color: "bg-blue-500" },
  { name: "Go", percentage: 18, color: "bg-cyan-500" },
  { name: "JavaScript", percentage: 12, color: "bg-amber-500" },
  { name: "Other", percentage: 7, color: "bg-slate-500" },
];

export function OpenSource() {
  const reduce = useReducedMotion();

  return (
    <section id="open-source" className="scroll-mt-24 py-16">
      <SectionHeading
        eyebrow="// open-source"
        title="Open Source"
        description="Contributing to the community and building tools that developers love."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {repositories.map((repo, index) => (
          <motion.article
            key={repo.name}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={reduce ? undefined : { y: -6 }}
            className="group rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-primary/50"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <GitBranch className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                  {repo.name}
                </h3>
              </div>
              <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {repo.language}
              </span>
            </div>
            <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {repo.description}
            </p>
            <div className="mb-5 flex items-center gap-6 border-b border-border pb-5 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span className="font-medium">{repo.stars}</span>
              </span>
              <span className="flex items-center gap-2">
                <GitFork className="h-4 w-4" />
                <span className="font-medium">{repo.forks}</span>
              </span>
            </div>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              View repository <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </motion.article>
        ))}
      </div>

      {/* Language breakdown */}
      <div className="mt-10 rounded-xl border border-border bg-surface/60 p-6 sm:p-8">
        <h3 className="mb-6 text-lg font-semibold text-foreground">Languages</h3>
        <div className="mx-auto max-w-2xl space-y-5">
          {languages.map((lang, index) => (
            <div key={lang.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-foreground">{lang.name}</span>
                <span className="text-muted-foreground">{lang.percentage}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-background">
                <motion.div
                  initial={reduce ? false : { width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full ${lang.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://github.com/tirthachetry-zoho"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
        >
          <GithubIcon className="h-5 w-5" />
          View GitHub profile
        </a>
      </div>
    </section>
  );
}