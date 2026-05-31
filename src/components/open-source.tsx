"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, GitFork, GitCommit, Users, TrendingUp, ExternalLink } from "lucide-react";

const repositories = [
  {
    name: "ai-agent-framework",
    description: "Modular framework for building autonomous AI agents with multi-agent collaboration",
    language: "Python",
    stars: 234,
    forks: 45,
    url: "https://github.com/tirthachetry-zoho/ai-agent-framework",
  },
  {
    name: "dev-productivity-toolkit",
    description: "Collection of tools and scripts to automate repetitive development tasks",
    language: "TypeScript",
    stars: 567,
    forks: 89,
    url: "https://github.com/tirthachetry-zoho/dev-productivity-toolkit",
  },
  {
    name: "cloud-infra-manager",
    description: "Automated cloud infrastructure provisioning and management tool",
    language: "Go",
    stars: 189,
    forks: 32,
    url: "https://github.com/tirthachetry-zoho/cloud-infra-manager",
  },
  {
    name: "llm-platform",
    description: "Platform for experimenting with different LLM models and prompts",
    language: "Python",
    stars: 312,
    forks: 56,
    url: "https://github.com/tirthachetry-zoho/llm-platform",
  },
];

const stats = [
  { icon: GitCommit, label: "Contributions", value: "1,234+" },
  { icon: Star, label: "Stars Earned", value: "2,500+" },
  { icon: GitFork, label: "Forks", value: "450+" },
  { icon: Users, label: "Followers", value: "890+" },
];

const languages = [
  { name: "Python", percentage: 35, color: "bg-blue-500" },
  { name: "TypeScript", percentage: 28, color: "bg-blue-600" },
  { name: "Go", percentage: 18, color: "bg-cyan-500" },
  { name: "JavaScript", percentage: 12, color: "bg-yellow-500" },
  { name: "Other", percentage: 7, color: "bg-gray-500" },
];

export function OpenSource() {
  return (
    <section id="open-source" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Open Source</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the open source community and building tools that developers love.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Repositories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repositories.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-6 h-6 text-primary" />
                    <h4 className="font-semibold group-hover:text-primary transition-colors">{repo.name}</h4>
                  </div>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">{repo.language}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{repo.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {repo.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {repo.forks}
                  </div>
                </div>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline text-sm"
                >
                  View Repository <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Language Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Languages</h3>
          <div className="max-w-2xl mx-auto bg-background border rounded-xl p-6">
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full ${lang.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/tirthachetry-zoho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
          >
            <GitBranch className="w-5 h-5 mr-2" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
