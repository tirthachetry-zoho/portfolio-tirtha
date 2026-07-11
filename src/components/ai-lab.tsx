"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Zap, Brain, Terminal, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const experiments = [
  {
    title: "Multi-Agent Collaboration System",
    description: "Autonomous AI agents that collaborate on complex tasks using shared memory and communication protocols.",
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
    description: "Automated workflows that combine LLMs with traditional automation tools for end-to-end task execution.",
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

const statusStyles: Record<string, string> = {
  Active: "bg-primary/10 text-primary border-primary/30",
  "In Progress": "bg-sky-500/10 text-sky-300 border-sky-500/30",
  Research: "bg-violet-500/10 text-violet-300 border-violet-500/30",
  Planning: "bg-amber-500/10 text-amber-300 border-amber-500/30",
};

export function AILab() {
  const reduce = useReducedMotion();

  return (
    <section id="ai-lab" className="scroll-mt-24 py-16">
      <SectionHeading
        eyebrow="// ai-lab"
        title="AI Lab"
        description="A space for AI experimentation, research, and cutting-edge technology exploration."
      />

      {/* Terminal-inspired status card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 rounded-xl border border-border bg-surface/60 p-6 font-mono text-sm"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-muted-foreground">ai-lab-status</span>
        </div>
        <div className="space-y-2 text-muted-foreground">
          <p><span className="text-primary">$</span> active_experiments: <span className="font-bold text-foreground">3</span></p>
          <p><span className="text-primary">$</span> completed_projects: <span className="font-bold text-foreground">12</span></p>
          <p><span className="text-primary">$</span> research_papers: <span className="font-bold text-foreground">5</span></p>
          <p><span className="text-primary">$</span> ai_models_tested: <span className="font-bold text-foreground">8</span></p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {experiments.map((experiment, index) => (
          <motion.article
            key={experiment.title}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={reduce ? undefined : { y: -6 }}
            className="group rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-primary/50"
          >
            <div className="mb-5 flex items-start justify-between">
              <div className="rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                <experiment.icon className="h-6 w-6 text-primary" />
              </div>
              <span
                className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                  statusStyles[experiment.status] ?? "border-border text-muted-foreground"
                }`}
              >
                {experiment.status}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {experiment.title}
            </h3>
            <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {experiment.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {experiment.tech.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/ai-lab"
          className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
        >
          Explore all experiments <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}