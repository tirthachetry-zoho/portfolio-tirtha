"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, GitFork, GitCommit, Users, TrendingUp, ExternalLink, Sparkles } from "lucide-react";

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
    <section id="open-source" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Community</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">Open Source</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contributing to the open source community and building tools that developers love.
          </p>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="gradient-border h-full">
                <div className="glass border border-primary/20 rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Featured Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-10 text-center">Featured Repositories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repositories.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="gradient-border h-full">
                  <div className="glass border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <GitBranch className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-bold group-hover:text-primary transition-colors">{repo.name}</h4>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium">{repo.language}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed">{repo.description}</p>
                    <div className="flex items-center gap-6 text-xs text-muted-foreground mb-6 pb-6 border-b border-primary/10">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        <span className="font-medium">{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GitFork className="w-4 h-4" />
                        <span className="font-medium">{repo.forks}</span>
                      </div>
                    </div>
                    <motion.a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="inline-flex items-center text-primary hover:underline text-sm font-medium"
                    >
                      View Repository <ExternalLink className="w-4 h-4 ml-2" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Language Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-10 text-center">Languages</h3>
          <div className="max-w-2xl mx-auto glass border border-primary/20 rounded-2xl p-8">
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1 }}
                      className={`h-full ${lang.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/tirthachetry-zoho"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 glow"
          >
            <GitBranch className="w-5 h-5 mr-2" />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
