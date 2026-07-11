"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GithubIcon } from "@/components/ui/brand-icons";
import { cn } from "@/lib/utils";

type Project = {
  id: number;
  name: string;
  description: string;
  why: string;
  stars: string;
  tech: string[];
  source: string;
  demo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    name: "tirtha/wms",
    description:
      "Warehouse Management System designed to streamline inventory and order operations for medium-scale businesses.",
    why: "Handles high-volume inventory transactions with eventual-consistency patterns and optimized PostgreSQL queries for real-time stock tracking.",
    stars: "★ 234",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Kafka"],
    source: "https://github.com/tirthachetry-zoho/warehouse-management",
    demo: "https://github.com/tirthachetry-zoho/warehouse-management",
    featured: true,
  },
  {
    id: 2,
    name: "tirtha/oms",
    description:
      "Backend contribution to an enterprise telecom order management system handling high-throughput transactions.",
    why: "Implemented Kafka-based event sourcing for order state changes, reducing database load by 40% during peak hours.",
    stars: "★ 189",
    tech: ["Java", "Kafka", "Redis", "Quarkus"],
    source: "https://github.com/tirthachetry-zoho/order-management",
  },
  {
    id: 3,
    name: "tirtha/school-mgmt",
    description:
      "Full-featured school platform with an admin panel for managing students, faculty, and academic content.",
    why: "Demonstrates full-stack capabilities with a React frontend and Node.js backend, including role-based access control and real-time notifications.",
    stars: "★ 567",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    source: "https://github.com/tirthachetry-zoho/school-management",
    demo: "https://github.com/tirthachetry-zoho/school-management",
  },
];

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <SectionHeading
        eyebrow="// work"
        title="Selected projects"
        description="A few things I'd happily defend in an interview."
      />

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={cn(
              "group relative rounded-xl border bg-surface/60 p-6 transition-colors sm:p-7",
              "hover:border-primary/50",
              project.featured ? "border-primary/30" : "border-border"
            )}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-3">
                <h3 className="mono text-lg font-bold text-foreground">
                  {project.name}
                </h3>
                {project.featured && (
                  <span className="rounded-full border border-primary/40 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-primary">
                    Featured
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="mono flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-3.5 w-3.5 text-primary" />
                  {project.stars}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} source on GitHub`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live demo`}
                      className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-foreground/90">
              {project.description}
            </p>

            <p className="mt-3 border-l-2 border-primary/60 pl-3 text-sm leading-relaxed text-muted-foreground">
              {project.why}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="chip"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}