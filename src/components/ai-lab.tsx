"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Brain, Terminal, Sparkles, ArrowRight, ExternalLink } from "lucide-react";

const experiments = [
  {
    title: "Multi-Agent Collaboration System",
    description: "Experimenting with autonomous AI agents that can collaborate on complex tasks using shared memory and communication protocols.",
    status: "Active",
    tech: ["CrewAI", "LangChain", "OpenAI"],
    icon: Brain,
  },
  {
    title: "MCP Integration Playground",
    description: "Building and testing Model Context Protocol integrations for enhanced AI tool capabilities and data access.",
    status: "In Progress",
    tech: ["MCP", "TypeScript", "Next.js"],
    icon: Zap,
  },
  {
    title: "Prompt Engineering Lab",
    description: "Systematic exploration of prompt engineering techniques, chain-of-thought reasoning, and few-shot learning patterns.",
    status: "Active",
    tech: ["GPT-4", "Claude", "Prompt Engineering"],
    icon: Sparkles,
  },
  {
    title: "AI Workflow Automation",
    description: "Creating automated workflows that combine LLMs with traditional automation tools for end-to-end task execution.",
    status: "Research",
    tech: ["n8n", "LangChain", "Python"],
    icon: Terminal,
  },
  {
    title: "RAG Experimentation",
    description: "Building and optimizing Retrieval-Augmented Generation systems for knowledge-intensive applications.",
    status: "Active",
    tech: ["Vector DB", "LangChain", "OpenAI"],
    icon: Cpu,
  },
  {
    title: "Fine-tuning Experiments",
    description: "Exploring fine-tuning techniques for domain-specific LLM applications and performance optimization.",
    status: "Planning",
    tech: ["LoRA", "PyTorch", "Hugging Face"],
    icon: Brain,
  },
];

export function AILab() {
  return (
    <section id="ai-lab" className="py-24 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Experimental Zone
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
            AI Lab
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A space for AI experimentation, research, and cutting-edge technology exploration.
          </p>
        </motion.div>

        {/* Terminal-inspired Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-card border border-primary/20 rounded-lg p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-muted-foreground">ai-lab-status</span>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p><span className="text-primary">$</span> active_experiments: <span className="text-secondary">3</span></p>
              <p><span className="text-primary">$</span> completed_projects: <span className="text-secondary">12</span></p>
              <p><span className="text-primary">$</span> research_papers: <span className="text-secondary">5</span></p>
              <p><span className="text-primary">$</span> ai_models_tested: <span className="text-secondary">8</span></p>
            </div>
          </div>
        </motion.div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <experiment.icon className="w-6 h-6 text-primary" />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  experiment.status === "Active" ? "bg-green-500/10 text-green-500" :
                  experiment.status === "In Progress" ? "bg-blue-500/10 text-blue-500" :
                  experiment.status === "Research" ? "bg-purple-500/10 text-purple-500" :
                  "bg-yellow-500/10 text-yellow-500"
                }`}>
                  {experiment.status}
                </span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{experiment.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{experiment.description}</p>
              <div className="flex flex-wrap gap-2">
                {experiment.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition-all duration-300">
            Explore All Experiments <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
