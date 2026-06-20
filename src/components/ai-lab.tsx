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
      {/* Enhanced Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
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
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"
        />
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
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">Experimental Zone</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-gradient">AI Lab</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A space for AI experimentation, research, and cutting-edge technology exploration.
          </p>
        </motion.div>

        {/* Enhanced Terminal-inspired Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="glass border border-primary/30 rounded-2xl p-8 font-mono text-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-muted-foreground">ai-lab-status</span>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p><span className="text-primary">$</span> active_experiments: <span className="text-secondary font-bold">3</span></p>
              <p><span className="text-primary">$</span> completed_projects: <span className="text-secondary font-bold">12</span></p>
              <p><span className="text-primary">$</span> research_papers: <span className="text-secondary font-bold">5</span></p>
              <p><span className="text-primary">$</span> ai_models_tested: <span className="text-secondary font-bold">8</span></p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="gradient-border h-full">
                <div className="glass border border-primary/20 rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <experiment.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      experiment.status === "Active" ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                      experiment.status === "In Progress" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                      experiment.status === "Research" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
                      "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                    }`}>
                      {experiment.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">{experiment.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{experiment.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experiment.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-secondary/10 text-secondary rounded-lg text-xs font-mono font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 glow"
          >
            Explore All Experiments <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
