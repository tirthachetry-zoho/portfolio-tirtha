import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

export const metadata = {
  title: "Résumé",
  description: "Tirtha Chetry — Software Engineer résumé.",
};

const experience = [
  {
    role: "Software Engineer",
    company: "Thoughtworks",
    period: "Dec 2025 — Present",
    location: "Bengaluru, IN",
    points: [
      "Building a UPI distributed system serving international markets.",
      "Developed scalable microservices architecture using Java and Quarkus.",
      "Deployed and managed cloud infrastructure on AWS for distributed system components.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Grid Dynamics",
    period: "May 2023 — Dec 2025",
    location: "Bengaluru, IN",
    points: [
      "Developed scalable software solutions for diverse client needs.",
      "Deployed applications on server machines with AWS.",
      "Conducted code reviews to ensure adherence to coding standards and best practices.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Airtel Africa",
    period: "Aug 2022 — Mar 2023",
    location: "Bengaluru, IN",
    points: [
      "Mentored junior developers on coding standards and industry best practices.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Amdocs",
    period: "Jun 2019 — Nov 2021",
    location: "Pune, IN",
    points: [
      "Designed and developed microservices using Java, Spring Boot, and RESTful APIs for scalable backend systems.",
    ],
  },
];

const skills = [
  "Java", "Spring Boot", "Quarkus", "Kafka", "PostgreSQL", "Redis",
  "TypeScript", "Node.js", "Python", "AWS", "Docker", "Kubernetes",
  "LangChain", "CrewAI", "Git", "CI/CD",
];

export default function ResumePage() {
  return (
    <div className="wrap py-16">
      <Link
        href="/"
        className="mono mb-8 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="mr-1 inline h-4 w-4" /> Back to home
      </Link>

      <div className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tirtha Chetry</h1>
          <p className="mt-1 text-muted-foreground">
            Software Engineer — Distributed Systems & Agentic AI
          </p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <a href="mailto:tirthachetri12@gmail.com" className="hover:text-primary">
            <Mail className="mr-1 inline h-4 w-4" /> tirthachetri12@gmail.com
          </a>
          <a href="https://github.com/tirthachetry-zoho" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <GithubIcon className="mr-1 inline h-4 w-4" /> github.com/tirthachetry-zoho
          </a>
          <a href="https://linkedin.com/in/tirthachetry" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <LinkedinIcon className="mr-1 inline h-4 w-4" /> linkedin.com/in/tirthachetry
          </a>
        </div>
      </div>

      <section className="py-8">
        <h2 className="eyebrow">// experience</h2>
        <div className="space-y-6">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold text-foreground">
                  {job.role} <span className="text-primary">@ {job.company}</span>
                </h3>
                <span className="mono text-sm text-muted-foreground">{job.period}</span>
              </div>
              <p className="mono mb-2 text-xs text-muted-foreground">{job.location}</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-4">
        <h2 className="eyebrow">// skills</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-xs text-muted-foreground">
        Print this page (⌘/Ctrl + P) to save as PDF.
      </p>
    </div>
  );
}